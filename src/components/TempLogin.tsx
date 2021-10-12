import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const TempLogin = () => {
  const [open, setOpen] = useState(true);

  return (
    <Alert color="info" isOpen={open} toggle={() => setOpen(!open)}>
      <p>
        For this demo you can use the following credentials
        <br />
        Username: <code>student@escola-lms.com</code>
        <br />
        Password: <code>secret</code>
        <br />
      </p>
    </Alert>
  );
};

export default TempLogin;
