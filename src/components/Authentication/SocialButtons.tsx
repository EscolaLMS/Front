import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import React, { ReactElement } from 'react';
import { useContext } from 'react';

const SocialButtons: React.FC = (): ReactElement => {
  const { apiUrl } = useContext(EscolaLMSContext);

  const isHashRouter = process.env.REACT_APP_ROUTING_TYPE === 'HashRouter';

  const urlSelf = `${window.location.origin}${isHashRouter ? '/%23' : ''}/authentication`;

  return (
    <div className="social-btns">
      <a
        className="social-btns__button social-btns__button--blue"
        href={`${apiUrl}/api/auth/social/facebook?return_url=${urlSelf}`}
      >
        {'Login with Facebook'}
      </a>

      <a
        className="social-btns__button social-btns__button--red"
        href={`${apiUrl}/api/auth/social/google?return_url=${urlSelf}`}
      >
        {'Login with Google'}
      </a>
    </div>
  );
};

export default SocialButtons;
