import { useParams } from 'react-router-dom';
import CourseContent from '../../organisms/course-content/course-content';
import CourseOverview from '../../organisms/course-overview/course-overview';
import VideoLesson from '../../organisms/video-lesson/video-lesson';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <VideoLesson />
      <p>Single course page. Course id: {courseId}</p>
      <CourseOverview />
      <CourseContent />
    </div>
  );
}

export default Course;
