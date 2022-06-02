import React, { useContext, useEffect, useState } from "react";
import { CoursesContext } from "@/components/Courses/CoursesContext";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import { useTranslation, Trans } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import "./index.scss";
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
    margin-bottom: 40px;
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
        overflow: scroll;
        justify-content: flex-start;
        align-items: center;
        column-gap: 10px;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
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
  console.log(params);
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

  useEffect(() => {
    console.log(selectedMainCategory);
  }, [selectedMainCategory]);

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
                    onCategoryClick: () => console.log("clicked"),
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
  // return (
  //   <div className={className}>
  //     <div className="escolalms-grid-sorting row align-items-center">
  //       <div className="col-lg-8 col-md-6 result-count">
  //         <p>
  //           <Trans
  //             i18nKey="FoundCourses"
  //             values={{ count: courses?.list?.meta.total || 0 }}
  //             components={{ strong: <span className="count" /> }}
  //           />
  //         </p>
  //       </div>

  //       <div className="col-lg-4 col-md-6 ordering">
  //         <div className="select-box">
  //           <select
  //             className="form-control"
  //             onBlur={(e) => {
  //               const [order_by, order] = e.target.value.split('|');

  //               setParams &&
  //                 setParams({
  //                   ...params,
  //                   order_by,
  //                   order: order as Order,
  //                 });
  //             }}
  //           >
  //             <option disabled>{t('SortBy')}</option>
  //             <option value="title|ASC">{t('Title')}</option>
  //             <option value="created_at|ASC">{t('DateAdded')}</option>
  //           </select>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="row">
  //       {courses &&
  //         courses.list &&
  //         courses.list.data.map((course: API.CourseListItem) => (
  //           <div className={`col-lg-${itemCol} col-md-6`} key={course.id}>
  //             <CourseCard course={course} />
  //           </div>
  //         ))}
  //       {courses && courses.list && courses.list.meta.total > courses.list.meta.per_page && (
  //         <Pagination
  //           total={courses.list.meta.total}
  //           perPage={courses.list.meta.per_page}
  //           currentPage={courses.list.meta.current_page}
  //           onPage={(i) =>
  //             setParams &&
  //             setParams({
  //               ...params,
  //               page: i,
  //               per_page: 6,
  //             })
  //           }
  //         />
  //       )}
  //     </div>
  //   </div>
  // );
};

export default CoursesCollection;
