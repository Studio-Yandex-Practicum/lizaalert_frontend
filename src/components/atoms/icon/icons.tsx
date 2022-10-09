import { ReactComponent as ArrowBack } from 'assets/icons/arrow-back.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as ArrowForward } from 'assets/icons/arrow-forward.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';
import { ReactComponent as Attachment } from 'assets/icons/attachment.svg';
import { ReactComponent as Calendar } from 'assets/icons/calendar.svg';
import { ReactComponent as Check } from 'assets/icons/check.svg';
import { ReactComponent as CheckSolid } from 'assets/icons/check-solid.svg';
import { ReactComponent as Checkbox } from 'assets/icons/checkbox.svg';
import { ReactComponent as Course } from 'assets/icons/course.svg';
import { ReactComponent as Cycle } from 'assets/icons/cycle.svg';
import { ReactComponent as Document } from 'assets/icons/document.svg';
import { ReactComponent as DragCircle } from 'assets/icons/drag-circle.svg';
import { ReactComponent as DragHandle } from 'assets/icons/drag-handle.svg';
import { ReactComponent as Duration } from 'assets/icons/duration.svg';
import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as ExclamationMark } from 'assets/icons/exclamation-mark.svg';
import { ReactComponent as Eye } from 'assets/icons/eye.svg';
import { ReactComponent as Fullscreen } from 'assets/icons/fullscreen.svg';
import { ReactComponent as History } from 'assets/icons/history.svg';
import { ReactComponent as Info } from 'assets/icons/info.svg';
import { ReactComponent as Lessons } from 'assets/icons/lessons.svg';
import { ReactComponent as Library } from 'assets/icons/library.svg';
import { ReactComponent as Link } from 'assets/icons/link.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Notification } from 'assets/icons/notification.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Radio } from 'assets/icons/radio.svg';
import { ReactComponent as Rank } from 'assets/icons/rank.svg';
import { ReactComponent as Retry } from 'assets/icons/retry.svg';
import { ReactComponent as Role } from 'assets/icons/role.svg';
import { ReactComponent as Send } from 'assets/icons/send.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Test } from 'assets/icons/test.svg';
import { ReactComponent as TextBold } from 'assets/icons/text-bold.svg';
import { ReactComponent as TextListBullet } from 'assets/icons/text-list-bullet.svg';
import { ReactComponent as TextListNumbered } from 'assets/icons/text-list-numbered.svg';
import { ReactComponent as Time } from 'assets/icons/time.svg';
import { ReactComponent as Trash } from 'assets/icons/trash.svg';
import { ReactComponent as Upload } from 'assets/icons/upload.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as UserCircle } from 'assets/icons/user-circle.svg';
import { ReactComponent as UserSquare } from 'assets/icons/user-square.svg';
import { ReactComponent as Users } from 'assets/icons/users.svg';
import { ReactComponent as Video } from 'assets/icons/video.svg';
import { ReactComponent as Volume } from 'assets/icons/volume.svg';
import { ReactComponent as Webinar } from 'assets/icons/webinar.svg';
import { ReactComponent as XSmall } from 'assets/icons/x-small.svg';
import { ReactComponent as XSolid } from 'assets/icons/x-solid.svg';
import { ReactComponent as Yandex } from 'assets/icons/yandex.svg';
import { IconType } from './types';

const defaultAttributes = {
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  style: { maxWidth: 'inherit', maxHeight: 'inherit', height: 'inherit' },
  fill: 'currentColor',
};

const icons = {
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

export default icons;

export const iconKeys = Object.keys(icons) as IconType[];
