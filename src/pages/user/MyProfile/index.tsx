import React, { useEffect, useContext, useState, ChangeEvent } from 'react';

import PageBanner from '../../../components/Common/PageBanner';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import Editor from 'rich-markdown-editor';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import Layout from '../../../components/_App/Layout';
import { useTranslation } from 'react-i18next';
import "./index.scss";

type UpdateCall = (key: keyof API.UserItem, value: any) => void;

const MyProfile = () => {
  const { user, updateProfile, updateAvatar } = useContext(EscolaLMSContext);
  const [state, setState] = useState<API.UserItem | undefined>(user.value);
  const history = useHistory();
  const [editorKey, setEditorKey] = useState<string>(Math.random().toString());
  const { t } = useTranslation();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push('/authentication');
    } else {
      setState(user.value);
      setEditorKey(Math.random().toString());
    }
  }, [history, user]);

  const updateValue: UpdateCall = useCallback((key, value) => {
    //@ts-ignore // TODO fix me
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const input = e.target as HTMLInputElement | HTMLTextAreaElement;
        updateValue(input.name as keyof API.UserItem, input.value);
      }
    },
    [updateValue],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      state && updateProfile(state);
    },
    [state, updateProfile],
  );

  const onAvatar = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.target.files && updateAvatar(e.target.files[0]);
    },
    [updateAvatar],
  );

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Navbar.MyProfile')}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t('Navbar.MyProfile')}
        />

        <div className="ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="user-profile">
                  {user?.value?.path_avatar && (
                    <Image path={user?.value.path_avatar} srcSizes={[380, 380 * 2]} />
                  )}

                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onAvatar}
                      accept="image/png, image/jpeg"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      {t('MyProfilePage.Avatar')}
                    </label>
                  </div>

                  <hr />

                  <h3>
                    {user?.value?.first_name} {user?.value?.last_name}
                  </h3>
                  <p>{user?.value?.email}</p>
                </div>
              </div>

              <div className="col-lg-8">
                <form onSubmit={onSubmit}>
                  <div className="user-profile-table">
                    <div className="table-responsive">
                      <table className="table table-bordered vertical-align-top">
                        <tbody>
                          <tr>
                            <td>{t('MyProfilePage.FirstName')}</td>
                            <td>
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  value={state?.first_name}
                                  onChange={onChange}
                                  name="first_name"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{t('MyProfilePage.LastName')}</td>
                            <td>
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  value={state?.last_name}
                                  onChange={onChange}
                                  name="last_name"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Bio</td>
                            <td>
                              <div className="form-group">
                                <Editor
                                  key={editorKey}
                                  defaultValue={state?.bio ? state?.bio : ''}
                                  onChange={(value) => updateValue('bio', value())}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className="default-btn" disabled={user.loading}>
                    <i className="flaticon-checkmark"></i>
                    {t('MyProfilePage.Update')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default MyProfile;
