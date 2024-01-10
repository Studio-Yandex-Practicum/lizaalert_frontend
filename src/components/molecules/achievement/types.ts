export type AchievementProps = {
  /** src к ачивке   */
  src: string;
  image: string;
  srcImg?: string;
  showToolTip?: boolean;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  id: number;
  issued_for: string;
  title?: string;
  key?: string;
  name: string;
};
