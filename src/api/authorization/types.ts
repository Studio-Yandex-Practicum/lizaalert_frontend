export type AuthorizationModel = {
  access: string;
  refresh: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegistrationModel = {
  id: number;
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
