import React, { useEffect, useCallback, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useDropzone } from "react-dropzone";

import { IAuthState } from "../../../redux/auth/reducer";
import { IRootState } from "../../../interfaces/redux";

import { uploadAvatar, getMe, removeAvatar } from "../../../redux/auth/actions";

import Image from "../../Image";
import Loader from "../../Loader";

import "./index.scss";

const AvatarUploader: React.FC<{
  label?: string;
}> = ({ label }): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  useEffect(() => {
    auth.uploadedAvatar && dispatch(getMe());
  }, [auth.uploadedAvatar]);

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(uploadAvatar(formData));
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => uploadFile(file));
  }, []);

  const deleteFile = useCallback(() => {
    dispatch(removeAvatar());
  }, [auth.user]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section
      className={["avatar-uploader", auth.uploadedAvatar && "uploaded"].join(
        " "
      )}
    >
      {label && <p className="label">{label}</p>}
      <div className="component-wrapper">
        <div className="uploaded-files">
          {auth?.user?.avatar && (
            <Image src={auth.user.avatar} alt="user avatar" />
          )}
        </div>
        <div>
          <div className="file-uploader" {...getRootProps()}>
            <input multiple={false} {...getInputProps()} />
            <p>Upload new</p>
          </div>

          {auth?.user?.avatar && (
            <button type="button" onClick={() => deleteFile()}>
              Delete current
            </button>
          )}
          {auth.loading && <Loader position="right" />}
        </div>
      </div>
    </section>
  );
};

export default AvatarUploader;
