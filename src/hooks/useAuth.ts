import { useSelector } from "react-redux";
import {
  accessTokenSelector,
  avatarSelector,
  emailSelector,
  errorSelector,
  isLoggeddInSelector,
  isRefreshingSelector,
  loadingSelector,
  refreshTokenSelector,
  usernameSelector,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const username = useSelector(usernameSelector);
  const email = useSelector(emailSelector);
  const avatar = useSelector(avatarSelector);
  const accessToken = useSelector(accessTokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);
  const isLoggedIn = useSelector(isLoggeddInSelector);
  const isRefreshing = useSelector(isRefreshingSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  return {
    username,
    email,
    avatar,
    accessToken,
    refreshToken,
    isLoggedIn,
    isRefreshing,
    loading,
    error,
  };
};
