import React, { useContext, useState } from "react";
import { CoursesContext } from "@/components/Courses/CoursesContext";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { useTranslation, Trans } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import "./index.scss";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CloseIcon } from "../../../icons";

enum Order {
  ASC = "ASC",
  DESC = "DESC",
}

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  padding: 140px 40px 30px;
  h1 {
    color: ${({ theme }) => theme.white};
    margin-bottom: 40px;
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
`;

const CoursesCollection: React.FC<{ className?: string; itemCol?: number }> = ({
  className = "",
  itemCol = 6,
}) => {
  const [selectedMainCategory, setSelectedMainCategory] =
    useState<API.Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<API.Category | null>(null);
  const { params, setParams, courses } = useContext(CoursesContext);
  const { categoryTree } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (courses && (!courses.list || !courses.list.data?.length)) {
    return <div className="col-lg-8">{t("NoCourses")}</div>;
  }
  console.log(categoryTree);

  return (
    <>
      <StyledHeader>
        <Title level={1}>
          {selectedMainCategory ? selectedMainCategory.name : "Kursy"}
        </Title>
        <div className="categories-container">
          <div className="categories-row">
            {!selectedMainCategory
              ? categoryTree.list?.map((mainCategory) => (
                  <Button
                    onClick={() => setSelectedMainCategory(mainCategory)}
                    mode="outline"
                    className="single-category-btn"
                  >
                    {mainCategory.name}
                  </Button>
                ))
              : selectedMainCategory &&
                selectedMainCategory.subcategories &&
                selectedMainCategory.subcategories.length === 0
              ? categoryTree.list?.map((mainCategory) => (
                  <Button
                    onClick={() => setSelectedMainCategory(mainCategory)}
                    mode="outline"
                    className={`single-category-btn ${
                      mainCategory.name === selectedMainCategory?.name &&
                      "single-category-btn--active"
                    }`}
                  >
                    {mainCategory.name}
                  </Button>
                ))
              : selectedMainCategory?.subcategories &&
                selectedMainCategory?.subcategories.map((subCategory) => (
                  <Button
                    onClick={() => setSelectedSubCategory(subCategory)}
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
              }}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </StyledHeader>
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
