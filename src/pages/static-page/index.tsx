import React, { useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import routes from "@/components/Routes/routes";
import MarkdownReader from "../../escolalms/sdk/components/Markdown/MarkdownReader";
import usePrevious from "../../hooks/usePrevious";
import Preloader from "../../components/Preloader";
import Layout from "@/components/_App/Layout";
import styled from "styled-components";

const StyledStaticPage = styled.section``;

const StaticPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { fetchPage, page } = useContext(EscolaLMSContext);
  const prevSlug = usePrevious(slug);

  useEffect(() => {
    if (
      slug &&
      !page.loading &&
      ((!page.value && !page.error) ||
        (page.value && page.value?.slug !== slug) ||
        (page.error && !prevSlug))
    ) {
      fetchPage(String(slug)).then(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, page]);

  // !page.value && !page.error - when very first load (empty state)
  // page.value && page.value?.slug !== slug - when prev static page was different
  // page.error && !prevSlug - when we return to static-page after error on static page (ex. when prev static page not exist)

  if (!page.loading && page.error && !page.error.success) {
    return <Redirect to={routes.notFound} />;
  }
  return (
    <Layout>
      <StyledStaticPage>
        <div className="container">
          <div className="content">
            <MarkdownReader>{page?.value?.content || ""}</MarkdownReader>
          </div>
        </div>
        {(page.loading ||
          (!page.value && !page.error) ||
          (page.value && page.value?.slug !== slug) ||
          (page.error && !prevSlug)) && <Preloader />}
      </StyledStaticPage>
    </Layout>
  );
};

export default StaticPage;
