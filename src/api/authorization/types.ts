export type AuthorizationModel = {
  access: string;
  refresh: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegistrationModel = {
  user: {
    username: string;
    email: string;
    id: number;
  };
  access_token: string;
  refresh_token: string;
};

export type RegistrationFormData = {
  username: string;
  email: string;
  password: string;
};

export type RefreshTokenData = {
  refresh: string;
};

export type VerifyTokenData = {
  token: string;
};
