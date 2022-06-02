import React, { useContext, useEffect, useState } from "react";
import { CoursesContext } from "@/components/Courses/CoursesContext";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CloseIcon } from "../../../icons";
import { useHistory } from "react-router-dom";
import Pagination from "@/components/Pagination";

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  padding: 140px 40px 30px;
  margin-bottom: 40px;

  h1 {
    color: ${({ theme }) => theme.white};
    margin-bottom: 35px;
  }

  .filters-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    .Dropdown-control {
      background: transparent;
      border-color: transparent;
      .Dropdown-placeholder {
        color: ${({ theme }) => theme.white};
      }
      .Dropdown-arrow-wrapper {
        svg {
          filter: brightness(0) invert(1);
        }
      }
    }
    .categories-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .clear-btn {
        appearance: none;
        background: transparent;
        border: none;
        outline: none;
        margin-left: 15px;
        cursor: pointer;
      }

      .categories-row {
        display: flex;
        max-width: 500px;
        overflow-x: auto;
        overflow-y: hidden;
        justify-content: flex-start;
        align-items: center;
        column-gap: 10px;
        padding-bottom: 5px;
        ::-webkit-scrollbar {
          height: 4px;
          width: 4px;
          border: 1px solid transparent;
        }
        ::-webkit-scrollbar-track {
          border-radius: 0;
          background: rgba(255, 255, 255, 0.2);
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 0;
          background: #ffffff;
        }

        .single-category-btn {
          border-color: ${({ theme }) => theme.white};
          color: ${({ theme }) => theme.white};
          max-height: 45px !important;
          width: 100%;
          &--active {
            border-color: ${({ theme }) => theme.white};
            color: ${({ theme }) => theme.primaryColor};
            background-color: ${({ theme }) => theme.white};
          }
        }
      }
    }
  }
`;

const CoursesList = styled.section`
  .course-wrapper {
    margin-bottom: 75px;
  }
`;

const CoursesCollection: React.FC = () => {
  const { params, setParams, courses } = useContext(CoursesContext);
  const { categoryTree } = useContext(EscolaLMSContext);
  const [selectedMainCategory, setSelectedMainCategory] =
    useState<API.Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<API.Category | null>(null);
  const { t } = useTranslation();
  const history = useHistory();
  const typeFilters = [
    { label: "Darmowe", value: "true" },
    { label: "Płatne", value: "false" },
  ];

  useEffect(() => {
    if (params?.category_id) {
      const categoryFromQuery =
        categoryTree.list?.filter(
          (item) => item.id === Number(params?.category_id)
        )[0] || null;
      setSelectedMainCategory(categoryFromQuery);
    }
  }, [categoryTree]);

  if (courses && (!courses.list || !courses.list.data?.length)) {
    return <div className="col-lg-8">{t("NoCourses")}</div>;
  }
  return (
    <>
      <StyledHeader>
        <Title level={1}>
          {selectedMainCategory ? selectedMainCategory.name : "Kursy"}
        </Title>
        <div className="filters-container">
          <div className="categories-container">
            <div className="categories-row">
              {!selectedMainCategory //Show main categories
                ? categoryTree.list?.map((mainCategory) => (
                    <Button
                      onClick={() => {
                        setSelectedMainCategory(mainCategory);
                        setParams &&
                          setParams({
                            ...params,
                            page: 1,
                            category_id: mainCategory?.id,
                          });
                      }}
                      mode="outline"
                      className="single-category-btn"
                    >
                      {mainCategory.name}
                    </Button>
                  ))
                : selectedMainCategory &&
                  selectedMainCategory.subcategories &&
                  selectedMainCategory.subcategories.length === 0 //Show main categories if main category is selected and subcategories does not exists
                ? categoryTree.list?.map((mainCategory) => (
                    <Button
                      onClick={() => {
                        setSelectedMainCategory(mainCategory);
                        setParams &&
                          setParams({
                            ...params,
                            page: 1,
                            category_id: mainCategory?.id,
                          });
                      }}
                      mode="outline"
                      className={`single-category-btn ${
                        mainCategory.name === selectedMainCategory?.name &&
                        "single-category-btn--active"
                      }`}
                    >
                      {mainCategory.name}
                    </Button>
                  ))
                : selectedMainCategory?.subcategories && //Show subcategories
                  selectedMainCategory?.subcategories.map((subCategory) => (
                    <Button
                      onClick={() => {
                        setSelectedSubCategory(subCategory);
                        setParams &&
                          setParams({
                            ...params,
                            page: 1,
                            category_id: subCategory?.id,
                          });
                      }}
                      mode="outline"
                      className={`single-category-btn ${
                        subCategory.name === selectedSubCategory?.name &&
                        "single-category-btn--active"
                      }`}
                    >
                      {subCategory.name}
                    </Button>
                  ))}
            </div>
            {(selectedMainCategory || selectedSubCategory) && (
              <button
                className="clear-btn"
                onClick={() => {
                  setSelectedMainCategory(null);
                  setSelectedSubCategory(null);
                  setParams &&
                    setParams({
                      ...params,
                      page: 1,
                      category_id: undefined,
                    });
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
          <div className="selects-row">
            <Dropdown
              onChange={(e) =>
                setParams &&
                setParams({
                  ...params,
                  page: 1,
                  free: e.value === "true" ? true : false,
                })
              }
              placeholder="Typ szkolenia"
              options={typeFilters}
            />
          </div>
        </div>
      </StyledHeader>
      <CoursesList>
        <div className="row">
          {courses?.list?.data.map((item) => (
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="course-wrapper">
                <CourseCard
                  id={item.id}
                  title={item.title}
                  categories={{
                    categoryElements: item.categories || [],
                    onCategoryClick: (id) =>
                      history.push(`/courses/?category_id=${id}`),
                  }}
                  onButtonClick={() => history.push(`/courses/${item.id}`)}
                  buttonText="Zacznij teraz"
                  lessonCount={5}
                  hideImage={false}
                  subtitle={
                    item.subtitle ? (
                      <Text>
                        <strong style={{ fontSize: 14 }}>
                          {item.subtitle?.substring(0, 30)}
                        </strong>
                      </Text>
                    ) : null
                  }
                  image={{
                    url: item.image_url,
                    alt: "",
                  }}
                  tags={item.tags as API.Tag[]}
                />
              </div>
            </div>
          ))}
        </div>
      </CoursesList>
      {courses &&
        courses.list &&
        courses.list.meta.total > courses.list.meta.per_page && (
          <Pagination
            total={courses.list.meta.total}
            perPage={courses.list.meta.per_page}
            currentPage={courses.list.meta.current_page}
            onPage={(i) =>
              setParams &&
              setParams({
                ...params,
                page: i,
                per_page: 6,
              })
            }
          />
        )}
    </>
  );
};

export default CoursesCollection;
