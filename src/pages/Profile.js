import React, { useEffect, useState } from 'react';

export default function Profile (props) {
  useEffect(() => {
    loadUserProfile();
  });

  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');

  const loadUserProfile = () => {
    props.auth.getProfile((profile, err) => {
      setError(err);
      setProfile(profile);
    })
  }
  return (
    <>
      <h3>
        Profile
      </h3>
      {profile && <div className='card'>
        <p>{profile.nickname}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture} alt={profile.given_name} />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </div>
      }
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </>

  )
}
