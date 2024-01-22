export type AchievementModel = {
  name: string;
  description: string;
  image: string;
  badge_type: string;
  badge_category: string;
  issued_for: string;
  threshold_courses: Nullable<number>;
  threshold_course: Nullable<number>;
};

export type AchievementsModel = AchievementModel[];
