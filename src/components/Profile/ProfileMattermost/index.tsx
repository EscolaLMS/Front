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
    console.log(mattermostChannels);
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
              <div className="categories-area ptb-100">
                <div className="container">
                  {mattermostChannels &&
                    mattermostChannels?.list?.data?.teams.map((Team: API.MattermostChannels) => {
                      return (
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                              <img src="/images/categories/categorie1.jpg" alt="image_" />

                              <div className="content">
                                <h3>{Team.display_name}</h3>
                                <span>{`${Team.channels.length} ${t(
                                  'MattermostChannel.Channels',
                                )}`}</span>
                              </div>
                            </div>
                            <div className="widget-area2">
                              <div className="widget widget_recent_courses">
                                {Team.channels.map((channel: API.Channel) => (
                                  <>
                                    <div className="item">
                                      <a href={channel.url} className="thumb">
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
                                          <a href={channel.url} target="_blank" rel="noreferrer">
                                            {channel.display_name}
                                          </a>
                                        </h4>
                                      </div>
                                      <span>{`${t('MattermostChannel.LastPost')}: ${new Date(
                                        channel.last_post_at,
                                      ).toLocaleDateString('en-US')}`}</span>

                                      <div className="clear"></div>
                                    </div>
                                  </>
                                ))}
                              </div>
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
      </div>
    </React.Fragment>
  );
};

export default ProfileMattermost;
