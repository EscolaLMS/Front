import { StyledActionButton } from "@/components/Profile/ProfileCourses/CourseCardActions";
import ContentLoader from "@/components/_App/ContentLoader";
import { useCertificateDownload } from "@/hooks/useDownloadCertificate";
import { IconCertificate } from "@/icons/index";
import { toast } from "@/utils/toast";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Certificate } from "@escolalms/sdk/lib/types/educycle";
import { CertificateAssignableTypes } from "@escolalms/sdk/lib/types/enums";
import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  courseId: number;
};

const GetCertificate: React.FC<Props> = ({ courseId }) => {
  const { fetchCertificates } = useContext(EscolaLMSContext);
  const { downloadCertificate, loadingId } = useCertificateDownload();
  const { t } = useTranslation();
  const [noCertificates, setNoCertificates] = useState(false);

  const handleGenerateCertificate = useCallback(async () => {
    try {
      const getCerts = await fetchCertificates({
        assignable_type: CertificateAssignableTypes.Course,
        assignable_id: Number(courseId),
      });

      if (getCerts && getCerts.success) {
        const certificates = (getCerts.data as Certificate[]) || [];

        if (certificates.length === 0) {
          setNoCertificates(true);
          return;
        }
        certificates.forEach(({ id, title }) => {
          downloadCertificate(id, title);
        });
      }
    } catch (error) {
      toast(`${t("UnexpectedError")}`, "error");
      console.log(error);
    }
  }, [courseId, downloadCertificate, t, fetchCertificates]);

  return (
    <StyledActionButton onClick={handleGenerateCertificate}>
      {!noCertificates && (
        <>
          <IconCertificate /> {t("MyProfilePage.DownloadCertificate")}{" "}
          {loadingId > -1 && <ContentLoader width="10px" height="10px" />}
        </>
      )}
    </StyledActionButton>
  );
};

export default GetCertificate;
