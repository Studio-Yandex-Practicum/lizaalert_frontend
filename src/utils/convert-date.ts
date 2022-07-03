type Options = {
  onlyTime?: boolean;
  isDateTime?: boolean;
  locales?: string;
};

export const convertDate = (
  date: string,
  options: Options = {
    isDateTime: false,
    onlyTime: false,
    locales: 'ru-RU',
  }
): string => {
  if (options.onlyTime) {
    return new Date(date).toLocaleTimeString(options.locales, {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  if (options.isDateTime) {
    return new Date(date).toLocaleDateString(options.locales, {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return new Date(date).toLocaleDateString(options.locales);
};
