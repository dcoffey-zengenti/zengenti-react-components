'use strict';

var React = require('react');
var reactRouterDom = require('react-router-dom');
var reactRedux = require('react-redux');
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
=======
var routing$1 = require('./routing-a4d7b382.js');
var routing = require('./routing-5db2c867.js');
var ToJs = require('./ToJs-5091048a.js');
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
var reactRouterConfig = require('react-router-config');
var actions = require('./actions-e22726ed.js');
var selectors = require('./selectors-69c3d37c.js');
var ToJs = require('./ToJs-ca9bea03.js');
var reactHotLoader = require('react-hot-loader');
var PropTypes = require('prop-types');

<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const NotFound = ({
  statusCode,
  statusText
}) => /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("header", null, /*#__PURE__*/React__default['default'].createElement("h1", null, statusCode || '404', " Page Not Found"), statusText && /*#__PURE__*/React__default['default'].createElement("h2", {
  style: {
    background: '#eee',
    color: '#666',
    fontSize: '100%',
    padding: '10px'
  }
}, statusText)));
=======
function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/ _interopDefaultLegacy(PropTypes);

const NotFound = ({ statusCode, statusText }) =>
  React__default['default'].createElement(
    React__default['default'].Fragment,
    null,
    React__default['default'].createElement(
      'header',
      null,
      React__default['default'].createElement(
        'h1',
        null,
        statusCode || '404',
        ' Page Not Found'
      ),
      statusText &&
        React__default['default'].createElement(
          'h2',
          {
            style: {
              background: '#eee',
              color: '#666',
              fontSize: '100%',
              padding: '10px',
            },
          },
          statusText
        )
    )
  );
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js

NotFound.propTypes = {
  statusCode: PropTypes__default['default'].number,
  statusText: PropTypes__default['default'].string,
};

<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
const Status = ({
  code,
  children
}) => {
  return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
    render: ({
      staticContext
    }) => {
=======
const Status = ({ code, children }) => {
  return React__default['default'].createElement(reactRouterDom.Route, {
    render: ({ staticContext }) => {
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
      if (staticContext) staticContext.status = code;
      return children;
    },
  });
};
Status.propTypes = {
  code: PropTypes__default['default'].number.isRequired,
  children: PropTypes__default['default'].element,
};

const getTrimmedPath = path => {
  if (path !== '/') {
    const nextPath = path.replace(/\/\//, '/');
    const lastChar = nextPath[nextPath.length - 1];

    if (lastChar == '/') {
      return nextPath.substring(0, nextPath.length - 1);
    }
  }

  return path;
};

const RouteLoader = ({
  contentTypeId,
  entry,
  isError,
  isLoading,
  isLoggedIn,
  isNotFound,
  loadingComponent,
  mappedEntry,
  notFoundComponent,
  projectId,
  routes,
  setNavigationPath,
  statePath,
  statusCode,
  statusText,
  userGroups,
  withEvents,
}) => {
  const location = reactRouterDom.useLocation(); // Always ensure paths are trimmed of trailing slashes so urls are always unique

  const trimmedPath = getTrimmedPath(location.pathname); // Match any Static Routes a developer has defined

  const matchedStaticRoute = () =>
    reactRouterConfig.matchRoutes(routes.StaticRoutes, location.pathname);

  const isStaticRoute = () => matchedStaticRoute().length > 0;

  const staticRoute = isStaticRoute() && matchedStaticRoute()[0];
  const routeRequiresLogin = staticRoute && staticRoute.route.requireLogin;
  const setPath = React.useCallback(() => {
    // Use serverPath to control the path we send to siteview node api to resolve a route
    let serverPath = null;

    if (staticRoute && staticRoute.match && staticRoute.match.isExact) {
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
      const {
        match,
        route
      } = staticRoute;

      if (route.path.includes('*')) {
        // Send the whole url to api if we have matched route containing wildcard
        serverPath = match.url;
      } else if (typeof route.fetchNodeLevel === 'number') {
        // Send all url parts to a specified level to api
        serverPath = match.url.split('/').splice(0, route.fetchNodeLevel + 1).join('/');
      } else {
        // Send all non-parameterised url parts to api
        serverPath = route.path.split('/').filter(p => !p.startsWith(':')).join('/');
      }
=======
      serverPath = staticRoute.route.path.includes('*')
        ? staticRoute.match.url
        : staticRoute.route.path
            .split('/')
            .filter(p => !p.startsWith(':'))
            .join('/');
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
    }

    setNavigationPath(
      serverPath || trimmedPath,
      location,
      staticRoute,
      withEvents,
      statePath,
      routes
    ); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    setNavigationPath, // staticRoute,
    withEvents,
    location,
    routes, // statePath,
    trimmedPath,
  ]);
  if (typeof window == 'undefined') setPath();
  React.useEffect(() => {
    setPath();
  }, [location, setPath]); // Need to redirect when url endswith a /

  if (location.pathname.length > trimmedPath.length) {
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Redirect, {
      to: trimmedPath
=======
    return React__default['default'].createElement(reactRouterDom.Redirect, {
      to: trimmedPath,
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
    });
  } // Render any Static Routes a developer has defined

  if (isStaticRoute() && !(!isLoggedIn && routeRequiresLogin)) {
    if (ToJs.matchUserGroup(userGroups, routeRequiresLogin))
      return reactRouterConfig.renderRoutes(routes.StaticRoutes, {
        projectId,
        contentTypeId,
        entry,
        mappedEntry,
        isLoggedIn,
      });
  } // Render a supplied Loading component if the route
  // is not a static route and is in a loading state

  if (isLoading && !isNotFound && loadingComponent) {
    const LoadingComponent = loadingComponent;
    return /*#__PURE__*/React__default['default'].createElement(LoadingComponent, null);
  } // Match any defined Content Type Mappings

  if (contentTypeId && !(!isLoggedIn && routeRequiresLogin)) {
    const MatchedComponent = routes.ContentTypeMappings.find(
      item => item.contentTypeID == contentTypeId
    ); // debugger;

    if (MatchedComponent && !(MatchedComponent.requireLogin && !isLoggedIn)) {
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
      if (ToJs.matchUserGroup(userGroups, MatchedComponent.requireLogin)) return /*#__PURE__*/React__default['default'].createElement(MatchedComponent.component, {
        projectId: projectId,
        contentTypeId: contentTypeId,
        entry: entry,
        mappedEntry: mappedEntry,
        isLoggedIn: isLoggedIn
      });
=======
      if (ToJs.matchUserGroup(userGroups, MatchedComponent.requireLogin))
        return React__default['default'].createElement(
          MatchedComponent.component,
          {
            projectId: projectId,
            contentTypeId: contentTypeId,
            entry: entry,
            mappedEntry: mappedEntry,
            isLoggedIn: isLoggedIn,
          }
        );
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
    }
  }

  const NotFoundComponent = notFoundComponent ? notFoundComponent : NotFound;

  if (isNotFound || isError) {
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
    return /*#__PURE__*/React__default['default'].createElement(Status, {
      code: statusCode
    }, /*#__PURE__*/React__default['default'].createElement(NotFoundComponent, {
      statusCode: statusCode,
      statusText: statusText
    }));
=======
    return React__default['default'].createElement(
      Status,
      {
        code: statusCode,
      },
      React__default['default'].createElement(NotFoundComponent, {
        statusCode: statusCode,
        statusText: statusText,
      })
    );
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
  }

  return null;
};

RouteLoader.propTypes = {
  contentTypeId: PropTypes__default['default'].string,
  entry: PropTypes__default['default'].object,
  isError: PropTypes__default['default'].bool,
  isLoading: PropTypes__default['default'].bool,
  isLoggedIn: PropTypes__default['default'].bool,
  isNotFound: PropTypes__default['default'].bool,
  loadingComponent: PropTypes__default['default'].func,
  mappedEntry: PropTypes__default['default'].object,
  notFoundComponent: PropTypes__default['default'].func,
  projectId: PropTypes__default['default'].string,
  routes: PropTypes__default['default'].objectOf(
    PropTypes__default['default'].array,
    PropTypes__default['default'].array
  ),
  setNavigationPath: PropTypes__default['default'].func,
  statePath: PropTypes__default['default'].string,
  statusCode: PropTypes__default['default'].number,
  statusText: PropTypes__default['default'].string,
  userGroups: PropTypes__default['default'].array,
  withEvents: PropTypes__default['default'].object,
};

const mapStateToProps = state => {
  return {
    contentTypeId: selectors.selectRouteEntryContentTypeId(state),
    entry: selectors.selectRouteEntry(state),
    isError: selectors.selectRouteIsError(state),
    isNotFound: selectors.selectIsNotFound(state),
    isLoading: selectors.selectRouteLoading(state),
    isLoggedIn: ToJs.selectUserIsAuthenticated(state),
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
    mappedEntry: selectors.selectMappedEntry(state),
    projectId: selectors.selectCurrentProject(state),
    statePath: selectors.selectCurrentPath(state),
    statusCode: selectors.selectRouteStatusCode(state),
    statusText: selectors.selectRouteErrorMessage(state),
    userGroups: ToJs.selectUserGroups(state)
=======
    mappedEntry: routing.selectMappedEntry(state),
    projectId: routing.selectCurrentProject(state),
    statePath: routing.selectCurrentPath(state),
    statusCode: routing.selectRouteStatusCode(state),
    statusText: routing.selectRouteErrorMessage(state),
    userGroups: ToJs.selectUserGroups(state),
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
  };
};

const mapDispatchToProps = {
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
  setNavigationPath: actions.setNavigationPath
=======
  setNavigationPath: routing$1.setNavigationPath,
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js
};
var RouteLoader$1 = reactHotLoader.hot(module)(
  reactRedux.connect(mapStateToProps, mapDispatchToProps)(
    ToJs.toJS(RouteLoader)
  )
);

exports.RouteLoader = RouteLoader$1;
<<<<<<< HEAD:cjs/RouteLoader-5c44f039.js
//# sourceMappingURL=RouteLoader-5c44f039.js.map
=======
//# sourceMappingURL=RouteLoader-ee532d78.js.map
>>>>>>> contensis-14-forgot-change-password:cjs/RouteLoader-3066d221.js