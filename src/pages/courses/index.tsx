import Layout from "@/components/_App/Layout";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import CoursesProvider from "@/components/Courses/CoursesProvider";
import { useTranslation } from "react-i18next";
import Container from "@/components/Common/Container";
import { Title } from "@escolalms/components/lib/index";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 31px;
`;

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.gray4};
  padding: 25px 0px 10px;
  position: relative;
  margin-bottom: 16px;
`;

const CoursesPage = () => {
  const { t } = useTranslation();
  return (
    <Layout metaTitle={t("CoursesPage.Courses")}>
      <CoursesProvider onlyFree={false}>
        <Wrapper className="courses-page">
          <StyledHeader>
            <Container>
              <Title level={1}> {t("CoursesPage.Courses")}</Title>
            </Container>
          </StyledHeader>

          <Container>
            <CoursesCollection />
          </Container>
        </Wrapper>
      </CoursesProvider>
    </Layout>
  );
};

export default CoursesPage;
