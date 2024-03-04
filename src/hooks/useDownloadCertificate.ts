import { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

export const useCertificateDownload = () => {
  const [loadingId, setLoadingId] = useState<number>(-1);
  const { generateCertificate } = useContext(EscolaLMSContext);

  const downloadCertificate = async (id: number, title?: string) => {
    setLoadingId(id);
    try {
      const response = await generateCertificate(id);
      if (response) {
        const element = document.createElement("a");
        document.body.appendChild(element);
        element.setAttribute("href", URL.createObjectURL(new Blob([response])));
        element.setAttribute("download", `${title || "Certificate"}.pdf`);
        element.style.display = "";
        element.click();
        document.body.removeChild(element);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId(-1);
    }
  };

  return { loadingId, downloadCertificate };
};
