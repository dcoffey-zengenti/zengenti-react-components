// import { ajax } from 'jquery';
// import queryString from 'query-string';

import { CookieHelper } from './CookieHelper.class';
import { SecurityApi } from './SecurityApi.class';

import { initialUserState } from '../redux/reducers';
// import { randomString } from '~/core/util/helpers';
// import userManager from './oidc/userManager';

const LOGIN_COOKIE = 'ContensisCMSUserName';
const LAST_USERNAME_COOKIE = 'ContensisLastUserName';
const DISPLAY_NAME_COOKIE = 'ContensisDisplayName';
const USER_LANGUAGE_COOKIE = 'User_LanguageID';
const AVATAR_COOKIE = 'ContensisAvatar';

// const contensis = CONTENSIS; /* global CONTENSIS */

export class LoginHelper {
  static GetLoginCookie() {
    return CookieHelper.GetCookie(LOGIN_COOKIE);
  }

  static SetLoginCookies(user) {
    if (user.securityToken)
      CookieHelper.SetCookie(LOGIN_COOKIE, user.securityToken);
    if (user.username) {
      CookieHelper.SetCookie(LAST_USERNAME_COOKIE, user.username);
      CookieHelper.SetCookie(DISPLAY_NAME_COOKIE, user.username);
    }
  }

  static GetCachedCredentials() {
    return {
      securityToken: CookieHelper.GetCookie(LOGIN_COOKIE),
      username: CookieHelper.GetCookie(LAST_USERNAME_COOKIE),
      displayName: CookieHelper.GetCookie(DISPLAY_NAME_COOKIE),
      languageId: CookieHelper.GetCookie(USER_LANGUAGE_COOKIE),
      avatar: CookieHelper.GetCookie(AVATAR_COOKIE),
    };
  }

  static GetCachedCredentialsSSR(cookies) {
    return {
      securityToken: cookies[LOGIN_COOKIE],
      username: cookies[LAST_USERNAME_COOKIE],
      displayName: cookies[DISPLAY_NAME_COOKIE],
      languageId: cookies[USER_LANGUAGE_COOKIE],
      avatar: cookies[AVATAR_COOKIE],
    };
  }

  static ClearCachedCredentials() {
    CookieHelper.DeleteCookie(LOGIN_COOKIE);
    CookieHelper.DeleteCookie(LAST_USERNAME_COOKIE);
    CookieHelper.DeleteCookie(DISPLAY_NAME_COOKIE);
    CookieHelper.DeleteCookie(USER_LANGUAGE_COOKIE);
    CookieHelper.DeleteCookie(AVATAR_COOKIE);
  }

  static async ValidateUser(groups = false, cookies = null) {
    const cached = cookies
      ? this.GetCachedCredentialsSSR(cookies)
      : this.GetCachedCredentials();

    if (cached.securityToken) {
      const response = await SecurityApi.ValidateUser(cached.securityToken);

      if (!response) return false;

      // Convert result to a User object
      const user = {
        username: cached.username,
        securityToken: encodeURIComponent(response.SecurityToken),
        logonResult: response.LogonResult,
        id: response.UserID,
        loginScreenMode: 'login',
      };

      if (user.logonResult !== 0) {
        // Clear the cookie cache so we don't need to validate again
        LoginHelper.ClearCachedCredentials();
      } else {
        // Set logged in flag
        user.loggedIn = true;

        if (groups) {
          const userWithGroups = await this.GetGroups(user);
          return userWithGroups;
        }
      }

      return user;
    }
    return false;
  }

  static async LoginUser(username, password, groups = false) {
    if (username && password) {
      // Call LogonUser API
      const loginResponse = await SecurityApi.LogonUser(username, password);
      if (loginResponse) {
        // Extract the elements we need from the response
        const { SecurityToken, LogonResult, UserID } = loginResponse;
        const failedLogin = !!LogonResult; // 0 is successful

        // Map response to new user object
        const user = {
          username,
          failedLogin,
          loggedIn: !!SecurityToken && !failedLogin,
          securityToken: SecurityToken,
          id: UserID,
          logonResult: this.CheckResult(LogonResult),
        };

        if (!user.failedLogin && !!user.securityToken) {
          this.SetLoginCookies(user);

          if (groups) {
            const userWithGroups = await this.GetGroups(user);
            return userWithGroups;
          }
        }

        return user;
      } else {
        // Create user object to show login failed due to service fault
        return {
          securityToken: null,
          loggedIn: false,
          failedLogin: true,
          logonResult: 'Service Fault',
        };
      }
    }
  }

  static async GetGroups(user) {
    if (!user.securityToken) {
      return user;
    }

    const userInfoResponse = await SecurityApi.GetUserInfo(user.securityToken);
    if (userInfoResponse) {
      const response = JSON.parse(userInfoResponse);

      if (response.Error || !response.GroupCollection) {
        user.errorMessage = `Problem fetching user info: ${response.Error}`;
      } else {
        user.groups = response.GroupCollection.map(group => ({
          name: group.GroupName,
          id: group.GroupId,
        }));
        user.fullName = response.Fullname;
        user.emailAddress = response.Email;
      }
    }
    return user;
  }

  static LogoutUser() {
    this.ClearCachedCredentials();
    return initialUserState.toJS();
  }

  static ClientRedirectToLogin(uri) {
    if (typeof window != 'undefined') {
      window.location.href = LoginHelper.LoginPageUrl(uri); // LoginHelper.IsWsFedSignin()
      // ? LoginHelper.WsFedLoginPageUrl(window.location)
      // : LoginHelper.LoginPageUrl(uri);
    }
  }

  static LoginPageUrl(uri) {
    return `${uri || '/login'}?redirect_uri=${window.location.pathname +
      window.location.search}`;
  }
  // static WsFedLoginPageUrl(currentLocation) {
  //   const loginPage = contensis.ADFS_LOGIN_PAGE.replace(
  //     '{redirect_uri}',
  //     encodeURIComponent(currentLocation.toString().split('#')[0])
  //   ).replace('{nonce}', randomString(5));
  //   return `${contensis.URL}${loginPage}`.replace(/([^:]\/)\/+/g, '$1');
  // }

  // static IsWsFedSignin() {
  //   return contensis.WSFED_SIGNIN;
  // }

  // static WsFedSignin(redirectUri) {
  //   userManager.signinRedirect({
  //     scope: 'openid',
  //     response_type: 'id_token',
  //     redirect_uri: redirectUri || window.location.toString(),
  //   });
  // }

  // static WsFedLogout() {
  //   ajax(`${contensis.URL}authenticate/logout/`, {
  //     dataType: 'jsonp',
  //     jsonp: false,
  //     async: false,
  //   });
  // }

  static async ForgotPassword(username) {
    if (username) {
      const currentUrl = window.location.protocol + '//' + window.location.host;
      const passwordResponse = await SecurityApi.ForgotPassword(
        username,
        currentUrl
      );
      if (passwordResponse) {
        // Extract the elements we need from the response
        return passwordResponse;
      }
    }
  }

  static async ChangePassword(
    username,
    oldPassword,
    newPassword,
    newPasswordConfirm
  ) {
    if (newPassword && newPasswordConfirm) {
      if (this.ValidatePassword(newPassword)) {
        const passwordResponse = await SecurityApi.ChangePassword(
          username,
          oldPassword,
          newPassword,
          newPasswordConfirm
        );
        //const passwordResponse = await SecurityApi.ChangePassword(btoa(username), btoa(oldPassword), btoa(newPassword), btoa(newPasswordConfirm));
        if (passwordResponse) {
          // Extract the elements we need from the response
          return passwordResponse;
        }
      } else {
        return 'New password does not meet the requirements: \r\n\r\n - Must be a minimum of 8 characters long \r\n - Must contain at least 1 uppercase character \r\n - Must contain at least 1 special character or number';
      }
    }
  }

  static async ChangePasswordWithToken(token, newPassword, newPasswordConfirm) {
    if (newPassword && newPasswordConfirm) {
      if (this.ValidatePassword(newPassword)) {
        const passwordResponse = await SecurityApi.ChangePasswordWithToken(
          token,
          btoa(newPassword),
          btoa(newPasswordConfirm)
        );
        //const passwordResponse = await SecurityApi.ChangePassword(btoa(username), btoa(oldPassword), btoa(newPassword), btoa(newPasswordConfirm));
        if (passwordResponse) {
          // Extract the elements we need from the response
          return passwordResponse;
        }
      } else {
        return 'New password does not meet the requirements: \r\n\r\n - Must be a minimum of 8 characters long \r\n - Must contain at least 1 uppercase character \r\n - Must contain at least 1 special character or number';
      }
    }
  }

  static ValidatePassword(pword) {
    //Password must be over 8 characters long
    if (pword.length < 8) return false;
    //This only returns true if the following criteria is met:
    //  *8 chars or more
    //  *Must contain at least 1 capital letter
    //  *Must contain at least 1 number or special character
    return /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/.test(
      pword
    );
  }

  static CheckResult(result) {
    const Results = {
      '0': 'OK',
      '-2': 'Incorrect username or password',
      '-3': 'Account disabled',
      '-4': 'Account locked',
      '-5': 'Log on from this PC is denied',
      '-6': 'Log on at this time is denied',
      '-7': 'Account already logged in',
      '-9': 'Unspecified error',
      '2': 'Password change required',
      '3': 'Insufficient privileges',
      '-10': 'Account expired',
      '-11': 'Maintenance mode',
      '4': 'Security token expired',
      '': 'An error has occured',
    };
    return Results[result];
  }
}
