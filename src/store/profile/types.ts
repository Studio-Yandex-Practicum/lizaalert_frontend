import { SerializedError } from 'api/core';
import { ProcessEnum } from 'utils/constants';

export type ProfileState = {
  profile: {
    id: number;
    personalData: {
      full_name: Nullable<string>;
      birth_date: Nullable<string>;
      location: Nullable<string>;
    };
    accountOverview: {
      full_name: string;
      count_pass_course: Nullable<number>;
      department: Nullable<string>;
      call_sign: Nullable<string>;
      photo: Nullable<string>;
    };
    accountData: {
      phone_number: string;
      email: string;
    };
  };
  editProfileProcess: ProcessEnum;
  editProfileError: Nullable<SerializedError>;
  fetchProfileProcess: ProcessEnum;
  fetchProfileError: Nullable<SerializedError>;
};
