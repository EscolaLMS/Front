import Layout from "@/components/_App/Layout";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import CoursesProvider from "@/components/Courses/CoursesProvider";
import { useTranslation } from "react-i18next";
import EntityPageWrapper from "@/components/Layouts";

const CoursesPage = () => {
  const { t } = useTranslation();
  return (
    <Layout metaTitle={t("CoursesPage.Courses")}>
      <CoursesProvider onlyFree={false}>
        <EntityPageWrapper title={t("CoursesPage.Courses")}>
          <CoursesCollection />
        </EntityPageWrapper>
      </CoursesProvider>
    </Layout>
  );
};

export default CoursesPage;
