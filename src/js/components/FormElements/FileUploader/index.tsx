import React, { useEffect, useState, useCallback, ReactElement } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "../../../interfaces/redux";
import { uploadFile } from "../../../redux/file/actions";
import { IFileState } from "../../../redux/file/reducer";
import { IFile } from "../../../interfaces/file";
import PdfIcon from "../../../../images/pdf-ico.png";
import "./index.scss";

const FileUploader: React.FC<{ setFiles: (arr: number[]) => void }> = ({
  setFiles,
}): ReactElement => {
  const [uploadedFiles, setUploadedFiles] = useState<IFile[]>([]);
  const dispatch: Dispatch = useDispatch();

  const fileState: IFileState = useSelector<IRootState, IFileState>(
    (state): IFileState => state.File
  );

  useEffect(() => {
    if (fileState?.file?.id) {
      setUploadedFiles([...uploadedFiles, fileState.file]);
    }
  }, [fileState?.file?.id]);

  useEffect(() => {
    setFiles(uploadedFiles.map((file: IFile) => file.id));
  }, [uploadedFiles]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      uploadFiles(acceptedFiles);
    },
    [fileState?.file?.id]
  );

  const uploadFiles = useCallback(
    (files) => {
      files.map((file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        if (formData.has("file")) {
          dispatch(uploadFile(formData));
        }
      });
    },
    [fileState?.file?.id]
  );

  const deleteFile = useCallback(
    (e, id) => {
      e.preventDefault();
      setUploadedFiles(uploadedFiles.filter((file: IFile) => file.id !== id));
    },
    [uploadedFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".png,.jpg,.pdf",
  });
  return (
    <div className="files-uploader-wrapper">
      <p>
        Add files: <span>(jpg, png, pdf - max file size 5mb)</span>
      </p>
      <div className="uploaded-files">
        {fileState.loading && <span>Uploading files...</span>}
        {uploadedFiles.map((file: IFile) => (
          <div className="uploaded-file" key={file.id}>
            <div className="uploaded-file__icon">
              <img
                src={file.filename.includes("pdf") ? PdfIcon : file.url}
                alt={file.filename}
              />
            </div>
            <div className="uploaded-file__content">
              <p className="file-title">{file.filename}</p>
              <span>{file.size} kB</span>
              <button
                onClick={(e) => deleteFile(e, file.id)}
                className="delete-file"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="file-uploader" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>
          Drag and drop files here or <span>Browse files</span>
        </p>
      </div>
    </div>
  );
};

export default FileUploader;
