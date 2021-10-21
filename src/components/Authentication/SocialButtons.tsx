import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import React, { ReactElement } from 'react';
import { useContext } from 'react';

const SocialButtons: React.FC<{ isRegister?: boolean }> = ({ isRegister }): ReactElement => {
  const { apiUrl } = useContext(EscolaLMSContext);

  return (
    <div className="social-btns">
      <a className="social-btns__button blue" href={`${apiUrl}/api/auth/social/facebook`}>
        {isRegister ? 'Register with facebook' : 'Login with facebook'}
      </a>

      <a className="social-btns__button red" href={`${apiUrl}/api/auth/social/google`}>
        {isRegister ? 'Register with Google' : 'Login with Google'}
      </a>
    </div>
  );
};

export default SocialButtons;
