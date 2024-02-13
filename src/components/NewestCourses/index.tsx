import { useContext, useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import CoursesSlider from "../CoursesSlider";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Course, PaginatedMetaList } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/ContentLoader";

const NewestCourses = () => {
  const [currentCourses, setCurrentCourses] = useState<Course[]>();
  const [loading, setLoading] = useState(true);
  const { fetchCourses } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  useEffect(() => {
    fetchCourses({
      per_page: 8,
      order_by: "created_at",
      order: "DESC",
    })
      .then((res) => {
        setCurrentCourses((res as PaginatedMetaList<Course>).data || []);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, [fetchCourses]);

  return (
    <Container>
      <Title className="slider-title" level={3} as="h1">
        <strong>{t<string>("Homepage.CoursesSlider2Title")}</strong>
      </Title>
      {loading && <ContentLoader />}
      {!loading && currentCourses && <CoursesSlider courses={currentCourses} />}
    </Container>
  );
};

export default NewestCourses;
