export default class getDeclensionOf {
  static lessons(lessonsCount) {
    let lessonsText = 'занятий';

    if (lessonsCount % 10 === 1 && lessonsCount !== 11) {
      lessonsText = 'занятие';
    }

    if ([2, 3, 4].includes(lessonsCount % 10)) {
      lessonsText = 'занятия';
    }

    return lessonsText;
  }
}
