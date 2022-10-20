import { useMemo } from 'react';

/**
 * Хук usePathnames возвращает массив путей для навигации по урокам.
 * Пока рассчитан только на страницу Курса и возвращает моковые данные.
 * Нужна доработка после интеграции с бекендом.
 * */

export const usePathnames = (mockCourseContent, courseId) => {
  const pathnamesArray = useMemo(() => {
    const modifiedCourseContent = mockCourseContent.map((topic) =>
      topic.lessons.map((les) => `${courseId}/${topic.id}/${les.id}`)
    );

    return modifiedCourseContent.reduce((init, curr) => init.concat(curr));
  }, [mockCourseContent, courseId]);

  return pathnamesArray;
};

export default usePathnames;
