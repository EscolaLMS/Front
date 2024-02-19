//@ts-nocheck - delete when "ids" type will be aded to sdk
import React, { useCallback, useContext, useEffect, useState } from "react";
import { CoursesContext } from "@/components/Courses/CoursesContext";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Categories } from "@escolalms/components/lib/components/molecules/Categories/Categories";
import styled, { css, useTheme } from "styled-components";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CloseIcon, UserIcon } from "../../../icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import Pagination from "@/components/Pagination";
import { isMobile } from "react-device-detect";
import PromotedCoursesSection from "@/components/PromotedCoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import { LessonsIcon } from "../../../icons";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "@/components/CourseCardWrapper";
import { Search } from "@escolalms/components/lib/components/molecules/Search/Search";
import { Row, Col } from "react-grid-system";
import { COURSES_ON_PAGE } from "@/config/courses";
import Tags from "@/components/Tags";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import { getSubtitleComponent } from "@/components/Subtitle";
import {
  CourseCardSkeleton,
  DropdownMenu,
  NewCourseCard,
} from "@escolalms/components/lib/index";
import { use } from "i18next";

type updateParamType =
  | { key: "tag"; value: string | undefined }
  | { key: "categories"; value: number[] }
  | { key: "title"; value: string };

type InitialFilters = {
  categories: number[] | undefined;
  tag: string | undefined;
  title: string | undefined;
};

const StyledHeader = styled("div")<{ filters: API.CourseParams | undefined }>`
  background: ${({ theme }) => theme.gray4};
  padding: ${isMobile ? "60px 20px 20px 20px" : "25px 0px 10px"};
  margin-bottom: ${isMobile ? "100px" : "40px"};
  position: relative;
  z-index: 100;

  h1 {
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 0px;
    transition: margin-bottom 0.5s ease-out;
  }

  .filters-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    row-gap: 35px;

    .categories-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      &--loading {
        opacity: 0.6;
      }
      ${isMobile &&
      css`
        position: absolute;
        bottom: -95px;
        left: -20px;
        width: calc(100% + 40px);
      `}

      .clear-btn {
        appearance: none;
        background: transparent;
        border: none;
        outline: none;
        margin-left: 15px;
        cursor: pointer;
        &--desktop {
          display: ${isMobile ? "none" : "block"};
        }
        ${isMobile &&
        css`
          svg {
            path {
              fill: ${({ theme }) => theme.primaryColor};
            }
          }
        `}
      }

      .categories-row {
        display: flex;
        max-width: 100%;
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

        .single-filter {
          border-width: 2px;
          border-style: solid;
          margin-bottom: 0;
          padding: 10px 20px;
          line-height: 0.9;
          text-align: center;
          max-height: 50px;
          min-height: 50px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          justify-content: center;
          border-color: ${({ theme }) =>
            isMobile ? theme.primaryColor : theme.white};
          color: ${({ theme }) =>
            isMobile ? theme.primaryColor : theme.white};

          &--filters {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 120px;
            color: ${({ theme }) => theme.primaryColor};
          }

          &--active {
            border-color: ${({ theme }) =>
              isMobile ? theme.primaryColor : theme.white};
            color: ${({ theme }) =>
              isMobile ? theme.white : theme.primaryColor};
            background-color: ${({ theme }) =>
              isMobile ? theme.primaryColor : theme.white};
          }
        }
      }
    }
    .mobile-categories-wrapper {
      button {
        color: ${({ theme }) => theme.primaryColor};
        border-color: ${({ theme }) => theme.primaryColor};
        min-width: 110px;
      }
    }

    .selects-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      column-gap: 35px;
      margin-left: auto;

      @media (max-width: 991px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 40px;
      }
      @media (max-width: 575px) {
        row-gap: 15px;
        margin-top: 20px;
      }

      .single-select--search {
        .search-input-options {
          display: none !important;
        }
        input {
          background: transparent;
          border-bottom: 1px solid #fff;
          color: #fff;
          border-radius: 0;
        }

        .fieldset {
          border-color: transparent;
        }

        svg {
          filter: brightness(0) invert(1);
        }
      }

      .single-select {
        min-width: 200px;
      }
    }
  }
`;

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

const CoursesCollection: React.FC = () => {
  const { courses, loading, params, setParams } = useContext(CoursesContext);
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const handleSortChange = useCallback(
    (order: "ASC" | "DESC") => {
      setParams({
        ...params,
        order,
      });
    },
    [params, setParams]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setParams({
        ...params,
        page,
      });
    },
    [params, setParams]
  );

  useEffect(() => {
    history.push(`${location.pathname}?${qs.stringify(params)}`);
  }, [params, location.pathname, history]);

  return (
    <>
      <div>
        <SortWrapper>
          <Text>Sortuj</Text>

          <DropdownMenu
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
            onChange={(e: DropdownMenuItem) => handleSortChange(e.id)}
            child={
              <Button mode="icon" className="dropdown">
                {params.order === "DESC" ? "Najnowsze" : "Najstarsze"}
              </Button>
            }
          />
        </SortWrapper>
      </div>
      {/* <StyledHeader filters={params}>
        <div className="filters-container">
          <div
            className={`categories-container ${
              loading && "categories-container--loading"
            }`}
          >
            <div className="categories-row">
              {(filterState.tag ||
                (filterState.categories &&
                  filterState.categories?.length > 0)) &&
                isMobile && (
                  <button
                    type="button"
                    onClick={() => {
                      setParsedParams({});
                      setParams && setParams({ page: 1 });
                      resetFilters();
                    }}
                    className="clear-btn"
                  >
                    <CloseIcon />
                  </button>
                )}
              {isMobile && (
                <div className="mobile-categories-wrapper">
                  <Categories
                    mobile
                    categories={categoryTree.list || []}
                    label={"Kategoria"}
                    selectedCategories={
                      filterState.categories &&
                      filterState.categories.length > 0
                        ? filterState.categories
                        : parsedParams && parsedParams.categories
                    }
                    drawerTitle={
                      <Title
                        level={5}
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {t("CoursesPage.Category")}
                      </Title>
                    }
                    handleChange={(value) => {
                      const newValue = value;
                      updateState({
                        key: "categories",
                        value: newValue,
                      });
                      setParams &&
                        setParams({
                          ...params,
                          page: 1,
                          "categories[]": newValue,
                        });
                    }}
                  />
                </div>
              )}
              {filterState.categories &&
                filterState.categories.length > 0 &&
                categoryTree?.list
                  ?.filter(
                    (item) => filterState.categories.indexOf(item.id) > -1
                  )
                  .map((category) => (
                    <Text key={category.id} className="single-filter">
                      {category.name}
                    </Text>
                  ))}
              {filterState?.tag && (
                <Text className="single-filter">{params?.tag}</Text>
              )}
              {filterState?.title && (
                <Text className="single-filter">{params?.title}</Text>
              )}
            </div>
            {((filterState.categories && filterState.categories?.length > 0) ||
              filterState.title ||
              filterState.tag) &&
              !isMobile && (
                <button
                  type="button"
                  onClick={() => {
                    setParsedParams({});
                    setParams && setParams({ page: 1 });
                    resetFilters();
                  }}
                  className="clear-btn clear-btn--desktop"
                >
                  <CloseIcon />
                </button>
              )}
          </div>
          <div className="selects-row">
            <div className="single-select single-select--search">
              <Search
                placeholder={t("CoursesPage.Search")}
                onSubmit={(e) => {
                  const title = e;
                  updateState({
                    key: "title",
                    value: title,
                  });
                  if (e === "") {
                    params && delete params["title"];
                    setParams && setParams({ ...params, page: 1 });
                  } else {
                    setParams &&
                      setParams({ ...params, page: 1, title: title });
                  }
                }}
              />
            </div>
            {!isMobile && (
              <div className="single-select single-select--category">
                <Categories
                  backgroundColor={theme.primaryColor}
                  categories={categoryTree.list || []}
                  label={t("CoursesPage.Category")}
                  selectedCategories={
                    filterState.categories && filterState.categories.length > 0
                      ? filterState.categories
                      : parsedParams && parsedParams.categories
                  }
                  drawerTitle={
                    <Title
                      level={5}
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {t("CoursesPage.Category")}
                    </Title>
                  }
                  handleChange={(value) => {
                    const newValue = value;
                    updateState({
                      key: "categories",
                      value: newValue,
                    });
                    setParams &&
                      setParams({
                        ...params,
                        page: 1,
                        "categories[]": newValue,
                      });
                  }}
                />
              </div>
            )}
            <div className="single-select single-select--tag">
              <Dropdown
                onChange={(e) => {
                  updateState({
                    key: "tag",
                    value: e.value,
                  });
                  setParams &&
                    setParams({
                      ...params,
                      page: 1,
                      tag: e.value,
                    });
                }}
                backgroundColor={theme.primaryColor}
                value={filterState.tag}
                placeholder="Tag"
                options={[
                  { label: t("CoursesPage.All"), value: "" },
                  ...tagsFilters,
                ]}
              />
            </div>
          </div>
        </div>
      </StyledHeader> */}
      {courses && !loading && (!courses.data || !courses.data.length) ? (
        <Title level={4}>{t("NoCourses")}</Title>
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
                    key={index.id}
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
                            <>
                              {item.image_path ? (
                                <ResponsiveImage
                                  path={item.image_path}
                                  alt={item.title}
                                  srcSizes={[300, 600, 900]}
                                />
                              ) : (
                                <CourseImgPlaceholder />
                              )}
                            </>
                          }
                          title={item.title}
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
              {courses.meta.total > courses.meta.per_page && (
                <Pagination
                  total={courses.meta.total}
                  perPage={courses.meta.per_page}
                  currentPage={courses.meta.current_page}
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
