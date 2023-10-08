export type ProfileModel = {
  /** уточнить какие данные приходят, когда заработает запрос */
  id: number;
  accountOverview: {
    avatar: string;
    userName: string;
    userStatus: string;
    userOccupation: string;
    coursesFinished: number;
  };
  personalData: {
    name: string;
    dateOfBirth: string;
    region: string;
    nickname: string;
    avatar: string;
  };
  accountData: {
    phoneNumber: string;
    email: string;
    password: string;
  };
};
