import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import { Loader } from "@/components/_App/Loader/Loader";
import WebinarContent from "@/components/Webinars/Webinar";

const WebinarPage = () => {
  const { fetchWebinar, webinar } = useContext(EscolaLMSContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchWebinar(Number(id));
  }, [fetchWebinar, id]);

  return (
    <Layout metaTitle={webinar?.value?.name || "Loading"}>
      {webinar.loading && <Loader />}
      {!webinar.loading && webinar.value && <WebinarContent />}
    </Layout>
  );
};

export default WebinarPage;
