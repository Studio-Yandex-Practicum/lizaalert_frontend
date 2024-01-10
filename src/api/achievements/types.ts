export type AchievementModel = {
  name: string;
  description: string;
  image: string;
  badge_type: string;
  badge_category: string;
  issued_for: string;
  threshold_courses: number | null;
  threshold_course: number | null;
};

export type AchievementsModel = AchievementModel[];
