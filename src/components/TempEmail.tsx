import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'reactstrap';

const TempEmail = () => {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
  return (
    <Alert color="info" isOpen={open} toggle={() => setOpen(!open)}>
      <p>
        {t('LoginPage.TempEmail1')}{' '}
        <a href="https://ethereal.email/messages" target="_blank" rel="noreferrer">
          ethereal.email
        </a>
        <br />
        {t('LoginPage.TempEmail2')}
        <br />
        {t('Cart.Columns.Name')}: <code>Tina Hagenes</code>
        <br />
        {t('LoginPage.Username')}: <code>tina.hagenes7@ethereal.email</code>
        <br />
        {t('Password')}: <code>gcWVwGD4pk33As1YdT</code>
        <br />
      </p>
    </Alert>
  );
};

export default TempEmail;
