import React from 'react';
import { useParams } from 'react-router-dom';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <p>Single course page. Course id: {courseId}</p>
    </div>
  );
}

export default Course;
