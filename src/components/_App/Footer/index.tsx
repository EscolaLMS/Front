import { useContext, useEffect, useMemo } from "react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { PageListItem, PaginatedMetaList } from "@escolalms/sdk/lib/types/api";
import { Link as LmsLink } from "@escolalms/components/lib/components/atoms/Link/Link";
import { Link } from "react-router-dom";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";
import { WellmsLogo } from "@/icons/index";
import GoTop from "@/components/_App/GoTop";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";

const StyledFooter = styled.footer`
  padding: ${isMobile ? "50px 0 18px" : "100px 0 50px 15px"};
  z-index: 50;
  position: relative;
  background: ${({ theme }) =>
    getStylesBasedOnTheme(theme.mode, theme.black, theme.white, theme.white)};
  .divider {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.gray3};
  }
  .links-row {
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    column-gap: ${isMobile ? "0" : "58px"};
    row-gap: ${isMobile ? "20px" : "0"};
    a {
      opacity: 0.65;
    }
    &:nth-of-type(1) {
      margin-bottom: 16px;
    }

    &.pages {
      display: block;
      text-align: ${isMobile ? "center" : "left"};
      /* border-top: 1px solid ${({ theme }) => theme.gray3}; */
      padding: 2em 0;

      a > p {
        margin-bottom: 0.5em;
      }
      .chunk-pages {
        display: flex;
        flex-direction: ${isMobile ? "column" : "row"};
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${isMobile ? "22px" : "30px"};
      }
    }
  }

  .footer-logotypes-text {
    margin-bottom: 20px;
    text-align: center;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 16px !important;
    }
    * {
      font-size: 13px !important;
      opacity: 0.85;
    }
  }
  .footer-logotypes {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }

  .single-link {
    text-decoration: none;
    transition: all 0.25s;
    opacity: 1;
    &:hover {
      opacity: 0.65;
    }
  }

  .copyrights {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
    gap: 11px;

    p {
      opacity: 0.65;
      margin: 0;
    }
  }
  .go-top {
    position: ${isMobile ? "block" : "absolute"};
    margin: ${isMobile ? "20px auto" : "0"};
    right: 18px;
    bottom: 18px;
  }
`;

type LinkObject = {
  link: string | undefined;
  label: string | Record<string, string>;
};

const Footer = () => {
  const { settings, fetchPages, pages, user } = useContext(EscolaLMSContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    fetchPages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const footerFromApi = useMemo(
    () =>
      (settings?.value?.footerMenu?.menu ?? []).filter(
        (item: Record<string, string | Record<string, string>>) =>
          user.value ? item : !item.auth
      ),
    [settings?.value?.footerMenu?.menu, user.value]
  );

  const chunkArray = (
    arr: PaginatedMetaList<PageListItem> | undefined,
    chunkSize: number
  ) => {
    if (!arr) return [];
    const tempArray = [];
    for (let i = 0; i < arr.data.length; i += chunkSize) {
      tempArray.push(arr.data.slice(i, i + chunkSize));
    }
    return tempArray;
  };

  const getLogoTypesText = useMemo(() => {
    if (settings?.value?.footer_logotypes) {
      return settings?.value?.footer_logotypes?.text;
    } else {
      return null;
    }
  }, [settings?.value?.footer_logotypes]);

  const getLogotypes = useMemo(() => {
    if (settings?.value?.footer_logotypes) {
      const data = settings?.value?.footer_logotypes;

      const logotypes = Object.keys(data)
        .filter((key) => {
          if (!isNaN(Number(key))) {
            return data[key];
          }
        })
        .map((key) => data[key]);

      return logotypes.map((logo: string, index: number) => (
        <img key={index} src={logo} alt="logotype" />
      ));
    } else {
      return null;
    }
  }, [settings?.value?.footer_logotypes]);

  return (
    <StyledFooter>
      <Container>
        <div className="links-row">
          {footerFromApi && footerFromApi.length > 0 ? (
            <>
              {footerFromApi.map((link: LinkObject) => {
                return (
                  !!link.link && (
                    <LmsLink
                      key={link.link.toString()}
                      className="single-link"
                      href={link.link}
                    >
                      {typeof link.label === "object" && (
                        <Text size="14">{link.label[i18n.language]}</Text>
                      )}
                    </LmsLink>
                  )
                );
              })}
            </>
          ) : (
            <>
              <Link className="single-link" to={routeRoutes.home}>
                <Text size="16">{t<string>("Footer.HomePage")}</Text>
              </Link>
              <Link className="single-link" to={routeRoutes.courses}>
                <Text size="16">{t<string>("Footer.Courses")}</Text>
              </Link>
              {user.value ? (
                <Link className="single-link" to={routeRoutes.myProfile}>
                  <Text size="16">{t<string>("Footer.UserProfile")}</Text>
                </Link>
              ) : (
                <>
                  <Link className="single-link" to={routeRoutes.login}>
                    <Text size="16">{t<string>("Header.Login")}</Text>
                  </Link>
                  <Link className="single-link" to={routeRoutes.register}>
                    <Text size="16">{t<string>("Header.Register")}</Text>
                  </Link>
                </>
              )}
              <Link className="single-link" to={routeRoutes.cart}>
                <Text size="16">{t<string>("Footer.Cart")}</Text>
              </Link>
            </>
          )}
        </div>
      </Container>
      <div className="divider" />
      <Container>
        <div className={"links-row pages"}>
          {chunkArray(pages.list, 4).map((chunk: PageListItem[]) => (
            <div className="chunk-pages" key={chunk.toString()}>
              {chunk
                .filter((page: PageListItem) => !page.slug.includes("mobile"))
                .map((page: PageListItem) => (
                  <LmsLink
                    key={page.id}
                    className="single-link"
                    href={`/#/${page.slug}`}
                  >
                    <Text size="14">{page.title}</Text>
                  </LmsLink>
                ))}
            </div>
          ))}
        </div>
        {getLogoTypesText && (
          <div className="footer-logotypes-text">
            <MarkdownRenderer>{getLogoTypesText}</MarkdownRenderer>
          </div>
        )}
        {getLogotypes && <div className="footer-logotypes">{getLogotypes}</div>}

        <div className="copyrights">
          <Text size="14">{t<string>("Footer.PoweredBy")}</Text>
          <LmsLink href="https://www.wellms.io">
            <WellmsLogo />
          </LmsLink>
        </div>
      </Container>
      <GoTop />
    </StyledFooter>
  );
};

export default Footer;
