import React, { useEffect, useContext, useState, ChangeEvent } from "react";
// import Navbar from '../components/_App/Navbar';
import PageBanner from "../../components/Common/PageBanner";

import { EscolaLMSContext } from "../../escolalms/context";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { Input } from "reactstrap";
import Preloader from "@/components/Preloader";
// import Footer from '../components/_App/Footer';
import Editor from "rich-markdown-editor";
import { useRef } from "react";
import Image from "../../escolalms/components/Image";
import Layout from "../../components/_App/Layout";

const MyProfile = ({ pageProps }) => {
  const { user, updateProfile, updateAvatar } = useContext(EscolaLMSContext);
  const [state, setState] = useState<API.UserItem>(user.value);
  const history = useHistory();
  const [editorKey, setEditorKey] = useState<string>(Math.random().toString());

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      setState(user.value);
      setEditorKey(Math.random().toString());
    }
  }, [history, user]);

  const updateValue = useCallback((key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        const input = e.target as HTMLInputElement | HTMLTextAreaElement;
        updateValue(input.name, input.value);
      }
    },
    [updateValue]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      updateProfile(state);
    },
    [state]
  );

  const onAvatar = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateAvatar(e.target.files[0]);
  }, []);

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        {/* <Navbar /> */}
        <PageBanner
          pageTitle="My Profile"
          homePageUrl="/"
          homePageText="Home"
          activePageText="My Profile"
        />

        <div className="ptb-100">
          <div className="container">
            {state && state?.first_name ? (
              <div className="row">
                <div className="col-lg-4">
                  <div className="user-profile">
                    {user?.value?.path_avatar && (
                      <Image
                        path={user?.value.path_avatar}
                        srcSizes={[380, 380 * 2]}
                      />
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
                        Select file to replace Avatar
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
                              <td>First Name</td>
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
                              <td>Last Name</td>
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
                                  {state?.bio && (
                                    <Editor
                                      key={editorKey}
                                      defaultValue={state?.bio}
                                      onChange={(value) =>
                                        updateValue("bio", value())
                                      }
                                    />
                                  )}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <button className="default-btn" disabled={user.loading}>
                      <i className="flaticon-checkmark"></i>Update
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <p />
            )}
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default MyProfile;
