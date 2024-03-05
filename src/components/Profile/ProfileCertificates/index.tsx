import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";

import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { NoteAction } from "@escolalms/components/lib/components/atoms/NoteAction/NoteAction";
import styled, { useTheme } from "styled-components";
import { DownloadIcon } from "../../../icons";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { useCertificateDownload } from "@/hooks/useDownloadCertificate";

type CertType = API.Certificate;

const CertificatesList = styled.section`
  .empty-certificates-message {
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
  const { certificates, fetchCertificates } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const theme = useTheme();
  const { downloadCertificate, loadingId } = useCertificateDownload();

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

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
                    {loadingId === cert.id ? (
                      <Spin color={theme.primaryColor} />
                    ) : (
                      <button
                        className="download-btn"
                        onClick={() => downloadCertificate(cert.id, cert.title)}
                      >
                        <DownloadIcon /> <Text>(.pdf)</Text>
                      </button>
                    )}
                  </div>
                }
              />
            ))}
      </CertificatesList>
    </>
  );
};

export default ProfileCertificates;
