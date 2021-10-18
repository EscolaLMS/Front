import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'reactstrap';

const TempLogin = () => {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
  return (
    <Alert color="info" isOpen={open} toggle={() => setOpen(!open)}>
      <p>
        {t('LoginPage.TempLogin')}
        <br />
        {t('LoginPage.Username')}: <code>student@escola-lms.com</code>
        <br />
        {t('Password')}: <code>secret</code>
        <br />
      </p>
    </Alert>
  );
};

export default TempLogin;
