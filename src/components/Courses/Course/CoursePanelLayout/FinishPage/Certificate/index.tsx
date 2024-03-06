import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import routeRoutes from "@/components/Routes/routes";
import { CenteredWrapper } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/styles";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import Title from "@escolalms/components/lib/components/atoms/Typography/Title";
import Text from "@escolalms/components/lib/components/atoms/Typography/Text";
import { IconCertificateBig } from "@/icons/index";
import { useCertificateDownload } from "@/hooks/useDownloadCertificate";

interface Props {
  certificateTitle: string;
  courseId: number;
}

export const CoursePanelFinishPageCertificate = ({
  certificateTitle,
  courseId,
}: Props) => {
  const { t } = useTranslation();
  const { downloadCertificate, loadingId } = useCertificateDownload();

  const onDownload = useCallback(() => {
    downloadCertificate(courseId, certificateTitle);
  }, [certificateTitle, courseId, downloadCertificate]);

  return (
    <CenteredWrapper className="certificate-container">
      <div className="icon-container">
        <IconCertificateBig />
      </div>
      <Title className="subtitle" level={2}>
        {t("CoursePanel.FinishPage.YourCertificate")}
      </Title>
      <Button
        className="button"
        onClick={onDownload}
        loading={loadingId === courseId}
        disabled={loadingId === courseId}
      >
        {t("DownloadCertificate")}
      </Button>
      <Text className="text">
        {t("CoursePanel.FinishPage.CertificateText")}
      </Text>
      <Link to={routeRoutes.home}>
        <Button mode="outline" className="button">
          {t("BackToHomePage")}
        </Button>
      </Link>
    </CenteredWrapper>
  );
};
