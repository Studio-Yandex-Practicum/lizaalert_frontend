export type AuthorizationModel = {
  access: string | undefined;
  refresh: string | undefined;
  id: number | undefined;
};

export type LoginFormData = {
  email: string | undefined;
  password: string | undefined;
};
