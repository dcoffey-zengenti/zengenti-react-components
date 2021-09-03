import useResetPassword from './useResetPassword';
import { toJS } from '~/core/util/ToJs';

const ResetPasswordContainer = ({ children, ...props }) => {
  const userProps = useResetPassword(props);
  return children(userProps);
};

ResetPasswordContainer.propTypes = {};

export default toJS(ResetPasswordContainer);