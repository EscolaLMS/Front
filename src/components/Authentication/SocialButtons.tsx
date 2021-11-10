import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import React, { ReactElement } from 'react';
import { useContext } from 'react';

const SocialButtons: React.FC = (): ReactElement => {
  const { apiUrl } = useContext(EscolaLMSContext);

  return (
    <div className="social-btns">
      <a
        className="social-btns__button social-btns__button--blue"
        href={`${apiUrl}/api/auth/social/facebook`}
      >
        {'Login with Facebook'}
      </a>

      <a
        className="social-btns__button social-btns__button--red"
        href={`${apiUrl}/api/auth/social/google`}
      >
        {'Login with Google'}
      </a>
    </div>
  );
};

export default SocialButtons;
