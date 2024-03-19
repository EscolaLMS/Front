import { StyledActionButton } from "@/components/Profile/ProfileCourses/CourseCardActions";
import ContentLoader from "@/components/_App/ContentLoader";
import { useCertificateDownload } from "@/hooks/useDownloadCertificate";
import { IconCertificate } from "@/icons/index";
import { toast } from "@/utils/toast";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  courseId: number;
};

const GetCertificate: React.FC<Props> = ({ courseId }) => {
  const { fetchCertificate } = useContext(EscolaLMSContext);
  const { downloadCertificate, loadingId } = useCertificateDownload();
  const { t } = useTranslation();

  const handleGenerateCertificate = useCallback(async () => {
    try {
      const getCert = await fetchCertificate(courseId);
      if (getCert.success) {
        downloadCertificate(getCert.data.id, getCert.data?.title);
      }
    } catch (error) {
      toast(`${t("UnexpectedError")}`, "error");
      console.log(error);
    }
  }, [courseId, downloadCertificate, fetchCertificate, t]);

  return (
    <StyledActionButton onClick={handleGenerateCertificate}>
      <IconCertificate /> {t("MyProfilePage.DownloadCertificate")}{" "}
      {loadingId > -1 && <ContentLoader width="10px" height="10px" />}
    </StyledActionButton>
  );
};

export default GetCertificate;
