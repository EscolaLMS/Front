import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";
import { FabricPreview } from "@/components/FabricEditor/preview";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { NoteAction } from "@escolalms/components/lib/components/atoms/NoteAction/NoteAction";
import Preloader from "@/components/Preloader";
import styled, { useTheme } from "styled-components";
import { DownloadIcon, ShareIcon } from "../../../icons";

type CertType = API.Certificate;

const CertificatesList = styled.section`
  .buttons-container {
    display: flex;
    column-gap: 60px;
    align-items: center;
    justify-content: flex-end;
    .download-btn {
      appearance: none;
      outline: none;
      border: none;
      cursor: pointer;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 10px;
    }
  }
`;

const ProfileCertificates: React.FC = () => {
  const { fetchCertificate, certificates } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const theme = useTheme();
  const [previewData, setPreviewData] = React.useState<any>();

  const handlePreview = async (id: number) => {
    const request = await fetchCertificate(id);

    if (request.success) {
      setPreviewData(request.data.content);
    }
  };

  if (certificates.loading) {
    return <Preloader />;
  }

  return (
    <CertificatesList>
      {certificates?.list?.data?.length === 0 ? (
        <Text>{t("MyProfilePage.EmptyCertificates")}</Text>
      ) : (
        <>
          {certificates &&
            certificates?.list?.data
              ?.filter((cert: CertType) => cert.title)
              .map((cert: CertType) => (
                <NoteAction
                  color={theme.primaryColor}
                  title={<Title level={4}>{cert.title}</Title>}
                  subtitle={new Date().toLocaleDateString("pl-PL")}
                  actions={
                    <div className="buttons-container">
                      <button
                        className="download-btn"
                        onClick={() => handlePreview(cert.id)}
                      >
                        <DownloadIcon /> <Text>(.pdf)</Text>
                      </button>
                    </div>
                  }
                />
              ))}
        </>
      )}
      <div className="fabric-preview-wrapper">
        {previewData && (
          <FabricPreview
            initialValue={previewData}
            onRendered={() => setPreviewData(undefined)}
          />
        )}
      </div>
      {certificates.loading && <Preloader />}
    </CertificatesList>
  );
};

export default ProfileCertificates;
