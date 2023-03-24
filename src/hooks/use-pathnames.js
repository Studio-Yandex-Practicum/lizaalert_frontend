import { useMemo } from 'react';

/**
 * Хук usePathnames возвращает массив путей для навигации по урокам.
 * Пока рассчитан только на страницу Курса и возвращает моковые данные.
 * Нужна доработка после интеграции с бекендом.
 * */

export const usePathnames = (courseContent, courseId) =>
  useMemo(() => {
    if (courseContent) {
      const modifiedCourseContent = courseContent.map((topic) =>
        topic.lessons.map((les) => `${courseId}/${topic.id}/${les.id}`)
      );

      return modifiedCourseContent.reduce((init, curr) => init.concat(curr));
    }
    return [];
  }, [courseContent, courseId]);
