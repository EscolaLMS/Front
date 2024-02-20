import React from "react";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Pagination from "@/components/Pagination";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Row, Col } from "react-grid-system";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import {
  CourseCardSkeleton,
  DropdownCategories,
  DropdownMenu,
  NewCourseCard,
} from "@escolalms/components/lib/index";
import { CloseIcon, IconSquares } from "@/icons/index";
import { DropdownMenuItem } from "@escolalms/components/lib/components/molecules/DropdownMenu/DropdownMenu";
import useCoursesFilter from "@/hooks/useCoursesFIlter";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

const CoursesList = styled.section`
  margin-bottom: ${isMobile ? "50px" : "75px"};
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin: unset;
  }
`;

const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    margin: 0px;
  }
`;

const SelectedCategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 17px;
  gap: 5px;
  .clear-categories {
    all: unset;
    cursor: pointer;
    margin-left: 14px;
    p {
      margin: 0;
      color: ${({ theme }) => theme.gray2};
    }
  }
`;

const SelectedCategory = styled.button`
  all: unset;
  border-radius: 19px;
  border: 1px solid #eaeaea;
  padding: 8px 13px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    margin: 0;
    margin-right: 17px;
  }
`;

const DropdownCategoriesButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    width: 11px;
    height: 11px;
    path {
      fill: ${({ theme }) => theme.primaryColor};
    }
  }
`;

type Order = "ASC" | "DESC";
//  TODO: translate polish words to i18n

const CoursesCollection: React.FC = () => {
  const {
    courses,
    loading,
    prevCategories,
    handleSortChange,
    handlePageChange,
    handleRemoveCategory,
    handleCategoryChange,
    onClearCategories,
    params,
    categoryTree,
  } = useCoursesFilter();
  const theme = useTheme();
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <FiltersHeader>
        <DropdownCategories
          checkedCategories={prevCategories}
          onClear={onClearCategories}
          onChange={handleCategoryChange}
          categories={categoryTree.list || []}
          child={
            <DropdownCategoriesButton>
              <IconSquares />
              <Text size="16">Pokaż wg kategorii</Text>
            </DropdownCategoriesButton>
          }
        />
        <SortWrapper>
          <Text>Sortuj</Text>

          <DropdownMenu
            top={10}
            menuItems={[
              {
                id: "DESC",
                content: "Najnowsze",
              },
              {
                id: "ASC",
                content: "Najstarsze",
              },
            ]}
            onChange={(e: DropdownMenuItem) =>
              handleSortChange(String(e.id) as Order)
            }
            child={
              <Text>
                {params && params.order === "DESC" ? "Najnowsze" : "Najstarsze"}
              </Text>
            }
          />
        </SortWrapper>
      </FiltersHeader>
      {prevCategories.length > 0 && (
        <SelectedCategoriesWrapper>
          {prevCategories.map((category) => (
            <SelectedCategory onClick={() => handleRemoveCategory(category.id)}>
              <Text size={"13"}>{category.name}</Text>{" "}
              <CloseIcon color={theme.gray2} />
            </SelectedCategory>
          ))}
          <button className="clear-categories" onClick={onClearCategories}>
            <Text size="13">Wyczyść wszystkie</Text>
          </button>
        </SelectedCategoriesWrapper>
      )}

      {courses && !loading && (!courses.data || !courses.data.length) ? (
        <Row justify="center">
          <Text size="18">{t("NoCourses")}</Text>
        </Row>
      ) : (
        <>
          {loading ? (
            <CoursesList>
              <Row
                style={{
                  gap: "30px 0",
                }}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <CourseCardSkeleton
                    key={`index-${index}-skeleton`}
                    colProps={{
                      xl: 3,
                      lg: 4,
                      md: 6,
                    }}
                  />
                ))}
              </Row>
            </CoursesList>
          ) : (
            <React.Fragment>
              <CoursesList>
                <Row
                  style={{
                    gap: "30px 0",
                  }}
                >
                  {!loading &&
                    courses?.data.map((item) => (
                      <Col md={6} lg={4} xl={3} key={item.id}>
                        <NewCourseCard
                          mobile={isMobile}
                          id={item.id}
                          image={
                            <Link to={`/courses/${item.id}`}>
                              {item.image_path ? (
                                <ResponsiveImage
                                  path={item.image_path}
                                  alt={item.title}
                                  srcSizes={[300, 600, 900]}
                                />
                              ) : (
                                <CourseImgPlaceholder />
                              )}
                            </Link>
                          }
                          title={
                            <Link to={`/courses/${item.id}`}>
                              <Title level={3} as="h3" className="title">
                                {item.title}
                              </Title>
                            </Link>
                          }
                          categories={
                            <CategoriesBreadCrumbs
                              categories={item.categories}
                              onCategoryClick={(id) => {
                                history.push(`/courses/?categories[]=${id}`);
                              }}
                            />
                          }
                        />
                      </Col>
                    ))}
                </Row>
              </CoursesList>

              {Number(courses?.meta.total) > Number(courses?.meta.per_page) && (
                <Pagination
                  total={Number(courses?.meta.total)}
                  perPage={Number(courses?.meta.per_page)}
                  currentPage={Number(courses?.meta.current_page)}
                  onPage={handlePageChange}
                />
              )}
            </React.Fragment>
          )}
        </>
      )}
    </>
  );
};

export default CoursesCollection;
