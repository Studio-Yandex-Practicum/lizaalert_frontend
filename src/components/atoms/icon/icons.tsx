import type { SVGAttributes } from 'react';
import ArrowBack from 'assets/icons/arrow-back.svg';
import ArrowDown from 'assets/icons/arrow-down.svg';
import ArrowForward from 'assets/icons/arrow-forward.svg';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';
import ArrowUp from 'assets/icons/arrow-up.svg';
import Attachment from 'assets/icons/attachment.svg';
import Calendar from 'assets/icons/calendar.svg';
import Check from 'assets/icons/check.svg';
import CheckSolid from 'assets/icons/check-solid.svg';
import Checkbox from 'assets/icons/checkbox.svg';
import Course from 'assets/icons/course.svg';
import Cycle from 'assets/icons/cycle.svg';
import Document from 'assets/icons/document.svg';
import DragCircle from 'assets/icons/drag-circle.svg';
import DragHandle from 'assets/icons/drag-handle.svg';
import Duration from 'assets/icons/duration.svg';
import Edit from 'assets/icons/edit.svg';
import ExclamationMark from 'assets/icons/exclamation-mark.svg';
import Eye from 'assets/icons/eye.svg';
import Fullscreen from 'assets/icons/fullscreen.svg';
import History from 'assets/icons/history.svg';
import Info from 'assets/icons/info.svg';
import Lessons from 'assets/icons/lessons.svg';
import Library from 'assets/icons/library.svg';
import Link from 'assets/icons/link.svg';
import Logout from 'assets/icons/logout.svg';
import Notification from 'assets/icons/notification.svg';
import Play from 'assets/icons/play.svg';
import Plus from 'assets/icons/plus.svg';
import Radio from 'assets/icons/radio.svg';
import Rank from 'assets/icons/rank.svg';
import Retry from 'assets/icons/retry.svg';
import Role from 'assets/icons/role.svg';
import Send from 'assets/icons/send.svg';
import Settings from 'assets/icons/settings.svg';
import Test from 'assets/icons/test.svg';
import TextBold from 'assets/icons/text-bold.svg';
import TextListBullet from 'assets/icons/text-list-bullet.svg';
import TextListNumbered from 'assets/icons/text-list-numbered.svg';
import Time from 'assets/icons/time.svg';
import Trash from 'assets/icons/trash.svg';
import Upload from 'assets/icons/upload.svg';
import User from 'assets/icons/user.svg';
import UserCircle from 'assets/icons/user-circle.svg';
import UserSquare from 'assets/icons/user-square.svg';
import Users from 'assets/icons/users.svg';
import Video from 'assets/icons/video.svg';
import Volume from 'assets/icons/volume.svg';
import Webinar from 'assets/icons/webinar.svg';
import XSmall from 'assets/icons/x-small.svg';
import XSolid from 'assets/icons/x-solid.svg';
import Yandex from 'assets/icons/yandex.svg';

const defaultAttributes: SVGAttributes<HTMLOrSVGElement> = {
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  style: { maxWidth: 'inherit', maxHeight: 'inherit', height: 'inherit' },
  fill: 'currentColor',
};

/** Объект со всеми иконками проекта */
export const icons = {
  arrowBack: <ArrowBack {...defaultAttributes} />,
  arrowDown: <ArrowDown {...defaultAttributes} />,
  arrowForward: <ArrowForward {...defaultAttributes} />,
  arrowLeft: <ArrowLeft {...defaultAttributes} />,
  arrowRight: <ArrowRight {...defaultAttributes} />,
  arrowUp: <ArrowUp {...defaultAttributes} />,
  attachment: <Attachment {...defaultAttributes} />,
  calendar: <Calendar {...defaultAttributes} />,
  check: <Check {...defaultAttributes} />,
  checkSolid: <CheckSolid {...defaultAttributes} />,
  checkbox: <Checkbox {...defaultAttributes} />,
  course: <Course {...defaultAttributes} />,
  cycle: <Cycle {...defaultAttributes} />,
  document: <Document {...defaultAttributes} />,
  dragCircle: <DragCircle {...defaultAttributes} />,
  dragHandle: <DragHandle {...defaultAttributes} />,
  duration: <Duration {...defaultAttributes} />,
  edit: <Edit {...defaultAttributes} />,
  exclamationMark: <ExclamationMark {...defaultAttributes} />,
  eye: <Eye {...defaultAttributes} />,
  fullscreen: <Fullscreen {...defaultAttributes} />,
  history: <History {...defaultAttributes} />,
  info: <Info {...defaultAttributes} />,
  lessons: <Lessons {...defaultAttributes} />,
  library: <Library {...defaultAttributes} />,
  link: <Link {...defaultAttributes} />,
  logout: <Logout {...defaultAttributes} />,
  notification: <Notification {...defaultAttributes} />,
  play: <Play {...defaultAttributes} />,
  plus: <Plus {...defaultAttributes} />,
  radio: <Radio {...defaultAttributes} />,
  rank: <Rank {...defaultAttributes} />,
  retry: <Retry {...defaultAttributes} />,
  role: <Role {...defaultAttributes} />,
  send: <Send {...defaultAttributes} />,
  settings: <Settings {...defaultAttributes} />,
  test: <Test {...defaultAttributes} />,
  textBold: <TextBold {...defaultAttributes} />,
  textListBullet: <TextListBullet {...defaultAttributes} />,
  textListNumbered: <TextListNumbered {...defaultAttributes} />,
  time: <Time {...defaultAttributes} />,
  trash: <Trash {...defaultAttributes} />,
  upload: <Upload {...defaultAttributes} />,
  user: <User {...defaultAttributes} />,
  userCircle: <UserCircle {...defaultAttributes} />,
  userSquare: <UserSquare {...defaultAttributes} />,
  users: <Users {...defaultAttributes} />,
  video: <Video {...defaultAttributes} />,
  volume: <Volume {...defaultAttributes} />,
  webinar: <Webinar {...defaultAttributes} />,
  xSmall: <XSmall {...defaultAttributes} />,
  xSolid: <XSolid {...defaultAttributes} />,
  yandex: <Yandex {...defaultAttributes} />,
};

/** Union ключей иконок */
export type IconType = Nullable<keyof typeof icons>;

/** Массив ключей иконок */
export const iconKeys = Object.keys(icons) as IconType[];
