import React, { useEffect, useState } from 'react';

export default function Private (props) {
  useEffect(() => {
    callPublicAPi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [message, setMessage] = useState('');

  const callPublicAPi = async () => {
    try {
      const response = await fetch('/private', {
        headers: {
          Authorization: `Bearer ${props.auth.getAccessToken()}`
        }
      });
      if (!response.ok) {
        throw new Error('network response was not ok');
      }
      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <p>
      The message: {message}
    </p>
  )
}
