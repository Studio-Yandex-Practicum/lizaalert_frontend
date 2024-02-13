import { SerializedError } from 'api/core';
import { ProcessEnum } from 'utils/constants';

export type ProfileState = {
  profile: {
    id: number;
    personalData: {
      full_name: string | null;
      birth_date: string | null;
      location: string | null;
    };
    accountOverview: {
      full_name: string;
      count_pass_course: number | null;
      department: string | null;
      call_sign: string | null;
      photo: string | null;
    };
    accountData: {
      phone_number: string;
      email: string;
    };
  };
  editProfileProcess: ProcessEnum;
  editProfileError: SerializedError | null;
  fetchProfileProcess: ProcessEnum;
  fetchProfileError: SerializedError | null;
};
