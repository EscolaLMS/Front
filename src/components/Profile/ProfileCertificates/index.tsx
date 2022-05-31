import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";
import { FabricPreview } from "@/components/FabricEditor/preview";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import Preloader from "@/components/Preloader";
import { ContextPaginatedMetaState } from "@escolalms/sdk/lib/react/context/types";

type Props = {
  certificates: ContextPaginatedMetaState<API.Certificate>;
};
type CertType = API.Certificate;

const ProfileCertificates: React.FC<Props> = ({ certificates }) => {
  const { fetchCertificate } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
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
    <div className="certificates-list">
      {certificates?.list?.data?.length === 0 ? (
        <Text>{t("MyProfilePage.EmptyCertificates")}</Text>
      ) : (
        <>
          {certificates &&
            certificates?.list?.data
              ?.filter((cert: CertType) => cert.title)
              .map((cert: CertType) => (
                // <tr key={cert.id}>
                //   <td className="order-created">
                //     {new Date().toLocaleDateString("en-US")}
                //   </td>
                //   <td className="order-price">{cert.title}</td>
                //   <td className="order-items">
                //     <button
                //       className="default-btn"
                //       onClick={() => handlePreview(cert.id)}
                //     >
                //       {t("Download")}
                //       <span></span>
                //     </button>
                //   </td>
                // </tr>
                <></>
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
    </div>
  );
};

export default ProfileCertificates;
