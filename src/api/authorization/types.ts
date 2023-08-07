export type AuthorizationModel = {
  email: string;
  password: string;
  headers: {
    'Content-Type': string;
    Authorization: string;
  };
};
