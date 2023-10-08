export type Profile = {
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

export type ProfileState = {
  isLoading: boolean;
  error: null | string;
  profile: Profile;
};
