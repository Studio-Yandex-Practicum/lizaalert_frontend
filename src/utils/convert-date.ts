type Options = {
  onlyTime?: boolean;
  isDateTime?: boolean;
  withShortMonth?: boolean;
  locales?: string;
};

export const convertDate = (
  date?: Nullable<string>,
  options: Options = {
    isDateTime: false,
    onlyTime: false,
    locales: 'ru-RU',
  }
): string => {
  if (!date) {
    return '';
  }

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

  if (options.withShortMonth) {
    return new Date(date).toLocaleDateString(options.locales, {
      day: 'numeric',
      month: 'short',
    });
  }

  return new Date(date).toLocaleDateString(options.locales);
};
