import React, { useEffect } from 'react';

export default function Callback (props) {
  console.log(props);
  useEffect(() => {
    // handle authetication if expected values are in the url
    if (/access_token|id_token|errror/.test(props.location.hash)) {
      props.auth.handleAuthentication();
    } else {
      throw new Error('invalid callback url');
    }
  });
  return (
    <div>
      Loading ...
    </div>
  )
}
