import React, { useEffect, useState } from 'react';

export default function Public () {
  useEffect(() => {
    callPublicAPi();
  });

  const [message, setMessage] = useState('');

  const callPublicAPi = async () => {
    try {
      const response = await fetch('/public');
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
