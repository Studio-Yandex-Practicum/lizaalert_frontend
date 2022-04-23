import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirectFromTopic = () => {
  const { courseId, topicId, lessonId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (courseId && topicId && !lessonId) {
      navigate(`/${courseId}`);
    }
  }, [pathname]);

  return { lessonId };
};

export default useRedirectFromTopic;
