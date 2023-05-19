import React, { useContext, lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";

import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { NoteAction } from "@escolalms/components/lib/components/atoms/NoteAction/NoteAction";
import styled, { useTheme } from "styled-components";
import { DownloadIcon } from "../../../icons";
import { Spin } from "@escolalms/components";

const PdfGenerate = lazy(() => import("@/components/PdfGenerate/index"));

type CertType = API.Certificate;

const CertificatesList = styled.section`
  .empty-certificates-message {
    padding: 34px 40px;
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
  }
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
      color: ${({ theme }) =>
        theme.mode === "dark" ? theme.white : theme.gray1};
    }
  }
`;

const ProfileCertificates: React.FC = () => {
  const { fetchCertificate, certificates, fetchCertificates } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const theme = useTheme();
  const [certificatePreview, setCertificatePreview] = React.useState(undefined);

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  const handlePreview = async (id: number) => {
    try {
      // const response = await generateCertificate(id);
      // if (response) {
      //   // setCertificatePreview(response.data.content);
      //   // create hidden link
      //   var element = document.createElement("a");
      //   document.body.appendChild(element);
      //   element.setAttribute("href", window.URL.createObjectURL(response));
      //   element.setAttribute("download", 'Certificate.pdf');
      //   element.style.display = "";
      //   element.click();
      //   document.body.removeChild(element);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CertificatesList>
        {certificates.list?.data.length === 0 && (
          <Text className="empty-certificates-message">
            <strong>{t("MyProfilePage.EmptyCertificates")}</strong>
          </Text>
        )}
        {certificates &&
          certificates?.list?.data &&
          certificates.list?.data.length > 0 &&
          certificates?.list?.data
            ?.filter((cert: CertType) => cert.title)
            .map((cert: CertType) => (
              <NoteAction
                color={theme.primaryColor}
                title={
                  <Title level={4} as="h3">
                    {cert.title}
                  </Title>
                }
                subtitle={
                  <Text noMargin size={"12"}>
                    {new Date(cert.created_at).toLocaleDateString("pl-PL")}
                  </Text>
                }
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

        <div className="fabric-preview-wrapper">
          {certificatePreview && (
            <Suspense fallback={<Spin color={theme.primaryColor} />}>
              <PdfGenerate
                initialValue={certificatePreview}
                onRendered={() => setCertificatePreview(undefined)}
              />
            </Suspense>
          )}
        </div>
      </CertificatesList>
    </>
  );
};

export default ProfileCertificates;
