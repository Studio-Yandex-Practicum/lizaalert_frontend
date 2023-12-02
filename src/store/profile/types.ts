export type Profile = {
  photo: string;
  full_name: string;
  department: string;
  count_pass_course: string;
  birth_date: string;
  location: string;
  call_sign: string;
  phone_number: string;
  email: string;
};

export type ProfileState = {
  isLoading: boolean;
  error: null | string;
  profile: Profile;
};
