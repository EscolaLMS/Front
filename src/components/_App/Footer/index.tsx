import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const StyledFooter = styled.footer`
  padding: ${isMobile ? "50px 0 70px" : "50px 0 50px"};
  z-index: 50;
  position: relative;
  .links-row {
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    column-gap: ${isMobile ? "0" : "95px"};
    row-gap: ${isMobile ? "20px" : "0"};
    &:nth-of-type(1) {
      margin-bottom: 30px;
    }
    .single-link {
      text-decoration: none;
      transition: all 0.25s;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    &.pages {
      display: block;
      columns: ${isMobile ? "1 auto" : "4 auto"};
      text-align: ${isMobile ? "center" : "left"};
      border-top: 1px solid ${({ theme }) => theme.gray3};
      padding: 2em 0;
      a > p {
        opacity: 0.6;
        margin-bottom: 0.5em;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .copyrights {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
    p {
      margin: 0;
      opacity: 0.5;
    }
    img {
      max-width: 100%;
      height: auto;
      max-height: 22px;
      margin-left: ${isMobile ? "10px" : "27px"};
    }
  }
`;

const Footer = () => {
  const { settings, fetchPages, pages, user } = useContext(EscolaLMSContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    fetchPages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const footerFromApi =
    settings.value.footerMenu &&
    settings.value.footerMenu.menu.filter(
      (item: Record<string, string | Record<string, string>>) =>
        user.value ? item : !item.auth
    );

  return (
    <StyledFooter>
      <div className="container">
        <div className="links-row">
          {footerFromApi && footerFromApi.length > 0 ? (
            <>
              {footerFromApi.map(
                (link: Record<string, string | Record<string, string>>) => {
                  return (
                    <Link className="single-link" to={link.link}>
                      {typeof link.label === "object" && (
                        <Text size="14">{link.label[i18n.language]}</Text>
                      )}
                    </Link>
                  );
                }
              )}
            </>
          ) : (
            <>
              <Link className="single-link" to="/">
                <Text size="14">{t<string>("Footer.HomePage")}</Text>
              </Link>
              <Link className="single-link" to="/courses">
                <Text size="14">{t<string>("Footer.Courses")}</Text>
              </Link>
              {user.value ? (
                <Link className="single-link" to="/user/my-profile">
                  <Text size="14">{t<string>("Footer.UserProfile")}</Text>
                </Link>
              ) : (
                <>
                  <Link className="single-link" to="/login">
                    <Text size="14">{t<string>("Header.Login")}</Text>
                  </Link>
                  <Link className="single-link" to="/register">
                    <Text size="14">{t<string>("Header.Register")}</Text>
                  </Link>
                </>
              )}
              <Link className="single-link" to="/cart">
                <Text size="14">{t<string>("Footer.Cart")}</Text>
              </Link>
            </>
          )}
        </div>
        <div className="links-row pages">
          {pages &&
            pages.list?.data.map((item) => (
              <Link key={item.id} className="single-link" to={`/${item.slug}`}>
                <Text size="12">{item.title}</Text>
              </Link>
            ))}
        </div>
        <div className="copyrights">
          <Text size="14">{t<string>("Footer.PoweredBy")}</Text>

          <img src={settings?.value?.global?.logo || ""} alt="" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
