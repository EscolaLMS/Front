import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react';
import { API } from '@escolalms/sdk/lib';

import './index.scss';
import LmsBoxHeader from '@/components/Common/LmsBoxHeader';

const ProfileMattermost = () => {
  const { mattermostChannels, fetchMattermostChannels } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  useEffect(() => {
    // fetchMattermostChannels();
  }, [mattermostChannels]);

  return (
    <React.Fragment>
      <div className="mattermostChannel">
        <div className="container">
          <LmsBoxHeader text={t('Navbar.MyMattermostChannels')} />
          {mattermostChannels?.list?.data?.length === 0 ? (
            <p className="text-center">{t('MyProfilePage.EmptyMattermostChannels')}</p>
          ) : (
            <form>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    {mattermostChannels &&
                      mattermostChannels?.list?.data?.teams.map((Team: API.MattermostChannels) => {
                        return (
                          <>
                            <thead>
                              <tr>
                                <th scope="col">{Team.display_name}</th>
                              </tr>
                            </thead>
                            <tr>
                              {Team.channels.map((channel: API.Channel) => (
                                <tr>
                                  <th scope="col">{channel.display_name}</th>
                                  <th scope="col">
                                    {' '}
                                    <a href={channel.url} target="_blank" rel="noreferrer">
                                      {channel.url}
                                    </a>
                                  </th>
                                </tr>
                              ))}
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </form>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileMattermost;
