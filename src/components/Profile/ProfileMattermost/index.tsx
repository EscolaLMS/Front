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
    fetchMattermostChannels();
  }, []);

  return (
    <React.Fragment>
      {/* <div className="mattermostChannel">
        <div className="container">
          <LmsBoxHeader text={t('Navbar.MyMattermostChannels')} />

          {mattermostChannels && mattermostChannels?.value && mattermostChannels?.value.teams && mattermostChannels?.value.teams.length === 0 ? (
            <p className="text-center">{t('MyProfilePage.EmptyMattermostChannels')}</p>
          ) : (
            <form>
              <div className="categories-area ptb-100">
                <div className="container">

                   {(mattermostChannels?.value?.teams || []).map((Team: API.MattermostChannels) => {
                      return (
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                              <img src="/images/categories/categorie1.jpg" alt="Team" />

                              <div className="content">
                                <h3>{Team.display_name}</h3>
                                <span>{`${Team.channels.length} ${t(
                                  'MattermostChannel.Channels',
                                )}`}</span>
                              </div>
                            </div>
                            <div className="widget widget_recent_courses">
                              {Team.channels.map((channel: API.Channel) => (
                                <>
                                  <div className="boxes-area boxes-style-two bg-f5f7fa">
                                    <div className="container">
                                      <div className="col-12">
                                        <div className="single-box-item">
                                          <div className="item">
                                            <a
                                              href={channel.url}
                                              className="thumb"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <img
                                                className="fullimage cover"
                                                src={`${process.env.PUBLIC_URL}/images/mattermost_logo.png`}
                                                alt="Mattermost"
                                              />
                                            </a>

                                            <div className="info">
                                              <h4 className="title usmall">
                                                {channel.type !== 'O' && (
                                                  <i className="flaticon-password"></i>
                                                )}{' '}
                                                <a
                                                  href={channel.url}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                >
                                                  {channel.display_name}
                                                </a>
                                              </h4>
                                              <p>{`${t('MattermostChannel.LastPost')}: ${new Date(
                                                channel.last_post_at,
                                              ).toLocaleDateString('en-US')}`}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </form>
          )}
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default ProfileMattermost;
