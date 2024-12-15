import { ReactNode } from "react";

export interface IModalProps {
  isOpenModal: boolean;
  onToggleModal: () => void;
}

export interface IUserRegister {
  username: string;
  email: string;
  password: string;
}

export interface IUserLogin extends Omit<IUserRegister, "username"> {}

export interface IAuthResponse {
  username: string;
  email: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}

export interface IResponseCurrent
  extends Omit<IAuthResponse, "accessToken" | "refreshToken"> {}

export interface IAuthState {
  username: string | null;
  email: string | null;
  avatar: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  loading: boolean;
  error: boolean;
}

export interface IPrivateRouteProps {
  redirectTo: string;
  page: ReactNode;
}
