import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import styled from "styled-components";
import { PdfIcon } from "../../../icons";
import { useCertificateDownload } from "@/hooks/useDownloadCertificate";
import { CertificateCard } from "@escolalms/components/lib/index";
import { Col, Row } from "react-grid-system";
import ContentLoader from "@/components/_App/ContentLoader";

type CertType = API.Certificate;

const CertificatesList = styled.section`
  .empty-certificates-message {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
  }
  .buttons-container {
    margin-top: 20px;
    display: flex;

    align-items: center;
    justify-content: flex-start;

    .download-btn {
      all: unset;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      color: ${({ theme }) => theme.primaryColor};
      p {
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
  .certificate-card {
    margin-bottom: 24px;
  }
`;

const ProfileCertificates: React.FC = () => {
  const { certificates, fetchCertificates } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

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
        <Row>
          {certificates &&
            certificates?.list?.data &&
            certificates.list?.data.length > 0 &&
            certificates?.list?.data
              ?.filter((cert: CertType) => cert.title)
              .map((cert: CertType) => (
                <Col lg={4}>
                  <CertificateCard
                    uptitle={
                      <Text size="13">{t("CoursePage.CourseTitle")}</Text>
                    }
                    title={
                      <Title level={4} as="h3">
                        {cert.title}
                      </Title>
                    }
                    dateUptitle={
                      <Text size="13">{t("CoursePage.CertificateDate")}</Text>
                    }
                    date={
                      <Text noMargin size={"16"} bold>
                        {new Date(cert.created_at).toLocaleDateString("pl-PL")}
                      </Text>
                    }
                    actions={
                      <div className="buttons-container">
                        {loadingId === cert.id ? (
                          <ContentLoader width="15px" height="15px" />
                        ) : (
                          <button
                            className="download-btn"
                            onClick={() =>
                              downloadCertificate(cert.id, cert.title)
                            }
                          >
                            <PdfIcon />{" "}
                            <Text bold size="13">
                              {t("CoursePage.DownloadCertificate")}
                            </Text>
                          </button>
                        )}
                      </div>
                    }
                  />
                </Col>
              ))}
        </Row>
      </CertificatesList>
    </>
  );
};

export default ProfileCertificates;
