import React, { useEffect, useState } from 'react';

export default function Courses (props) {
  useEffect(() => {
    callPublicAPi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null)

  const callPublicAPi = async () => {
    try {
      const response = await fetch('/courses', {
        headers: {
          Authorization: `Bearer ${props.auth.getAccessToken()}`
        }
      });
      if (!response.ok) {
        throw new Error('network response was not ok');
      }
      const result = await response.json();
      setCourses(result.courses);
    } catch (error) {
      setError(error)
    }
  }

  return (
    <>
      The Courses
      <ul>
        {courses.map((course) => {
          return <li key={course.id}>{course.title}</li>
        })}
      </ul>
      {error && JSON.stringify(error)}
    </>
  )
}
