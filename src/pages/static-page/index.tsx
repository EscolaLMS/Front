import React, { useContext, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import routes from "@/components/Routes/routes";
import usePrevious from "../../hooks/usePrevious";
import Layout from "@/components/_App/Layout";
import styled, { useTheme } from "styled-components";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { AsideMenu } from "@escolalms/components/lib/components/atoms/AsideMenu/AsideMenu";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { isMobile } from "react-device-detect";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import Breadcrumbs from "@/components/Breadcrumbs";
import { t } from "i18next";
import MarkdownImage from "../../components/Markdown/MarkdownImage";
import MarkdownTable from "../../components/Markdown/MarkdownTable";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const StyledStaticPage = styled.section`
  .content {
    margin-top: ${isMobile ? "30px" : 0};
  }
  .spin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  }
`;

const StaticPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { fetchPage, page, fetchPages, pages } = useContext(EscolaLMSContext);
  const prevSlug = usePrevious(slug);
  const theme = useTheme();
  useEffect(() => {
    if (
      slug &&
      !page.loading &&
      ((!page.value && !page.error) ||
        (page.value && page.value?.slug !== slug) ||
        (page.error && !prevSlug))
    ) {
      fetchPages();
      fetchPage(String(slug));
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
    <Layout metaTitle={page.value?.title}>
      <StyledStaticPage>
        <div className="container">
          <Breadcrumbs
            items={[
              <Link to="/">{t<string>("Home")}</Link>,
              <Text size="12">{page.value?.title}</Text>,
            ]}
          />
          <div className="row">
            <div className="col-lg-4">
              {pages &&
                pages.list?.data.map((item, index) => (
                  <AsideMenu key={index} active={slug === item.slug}>
                    <Link to={item.slug}>
                      <Text>
                        <strong>
                          {item.title.substring(0, 50)}
                          {item.title.length > 50 && "..."}
                        </strong>
                      </Text>
                    </Link>
                  </AsideMenu>
                ))}
            </div>
            <div className="col-lg-8">
              <div className="content">
                {page.loading ||
                (!page.value && !page.error) ||
                (page.value && page.value?.slug !== slug) ||
                (page.error && !prevSlug) ? (
                  <div className="spin-container">
                    <Spin color={theme.primaryColor} />
                  </div>
                ) : (
                  <MarkdownRenderer
                    components={{
                      img: ({ node, ...props }) => <MarkdownImage {...props} />,
                      table: ({ node, ...props }) => (
                        <MarkdownTable {...props} />
                      ),
                    }}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    linkTarget="_blank"
                  >
                    {page?.value?.content || ""}
                  </MarkdownRenderer>
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledStaticPage>
    </Layout>
  );
};

export default StaticPage;
