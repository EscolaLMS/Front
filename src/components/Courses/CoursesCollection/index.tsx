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
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
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
import { Search } from "@escolalms/components";

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
  background: ${({ theme }) => theme.primaryColor};
  padding: ${isMobile ? "60px 20px 20px 20px" : "140px 40px 30px"};
  margin-bottom: ${isMobile ? "100px" : "40px"};
  position: relative;
  z-index: 100;

  h1 {
    color: ${({ theme }) => theme.white};
    margin-bottom: ${({ filters }) =>
      isMobile
        ? 0
        : filters && Object.keys(filters).length > 1
        ? "35px"
        : filters && Object.keys(filters).length === 1 && "page" in filters
        ? "-35px"
        : filters === undefined
        ? "-35px"
        : "35px"};
    transition: margin-bottom 0.5s ease-out;
  }

  .filters-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: relative;

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
        max-width: ${isMobile ? "100%" : "500px"};
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
      @media (max-width: 991px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 40px;
      }
      @media (max-width: 575px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        row-gap: 15px;
        margin-top: 20px;
      }
      .single-select {
        min-width: 130px;
        &--search {
          @media (max-width: 991px) {
            margin-bottom: 20px;
          }
          .search-input-options {
            display: none !important;
          }
          input {
            background: transparent;
            border-bottom: 1px solid #fff;
            color: #fff;
          }
          svg {
            filter: brightness(0) invert(1);
          }
        }
        &--tag {
          .Dropdown-menu {
            border: none;
          }
        }
        &--category {
          min-width: 200px;
          div {
            &:not(.categories-dropdown-options) {
              border: none;
              background: transparent;
              color: #fff;
            }
          }
          .categories-dropdown-options {
            background-color: ${({ theme }) => theme.white};
            margin-top: -1px;
          }
          .categories-dropdown-button {
            font-size: 16px;
            font-weight: 400;
            font-family: ${({ theme }) => theme.font};
          }
          button {
            ${isMobile &&
            css`
              color: ${({ theme }) => theme.white};
              border-color: ${({ theme }) => theme.white};
            `}
          }

          label {
            input {
              min-width: 20px;
            }
          }
        }
      }
    }
  }
`;

const CoursesList = styled.section`
  .course-wrapper {
    margin-bottom: ${isMobile ? "50px" : "75px"};
    padding-bottom: 15px;
    overflow: hidden;
  }
`;

const CoursesCollection: React.FC = () => {
  const { params, setParams, courses } = useContext(CoursesContext);
  const { categoryTree, uniqueTags } = useContext(EscolaLMSContext);
  const [parsedParams, setParsedParams] = useState<
    API.CourseParams | undefined
  >();
  const initialFilters = {
    categories: [],
    tag: "",
    title: "",
  };
  const [filterState, setFilterState] =
    useState<InitialFilters>(initialFilters);
  const [paramsLoaded, setParamsLoaded] = useState<API.CourseParams | false>(
    false
  );
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();

  const updateState = useCallback(
    (updateObj: updateParamType) =>
      setFilterState((prevState) => ({
        ...prevState,
        [updateObj.key]: updateObj.value,
      })),
    []
  );

  const resetFilters = () => {
    setFilterState(initialFilters);
  };

  const tagsFilters = uniqueTags.list
    ? uniqueTags.list?.map((item) => {
        return { label: String(item.title), value: String(item.title) };
      })
    : [];

  useEffect(() => {
    params && setParamsLoaded(params);
  }, [params]);

  useEffect(() => {
    paramsLoaded &&
      setParsedParams(
        qs.parse(location.search, {
          arrayFormat: "bracket",
          parseNumbers: true,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsLoaded]);

  useEffect(() => {
    parsedParams &&
      setFilterState({
        categories: parsedParams.ids,
        tag: parsedParams.tag,
        title: parsedParams.title,
      });
  }, [parsedParams]);
  return (
    <>
      <StyledHeader filters={params}>
        <Title level={1}> {t("CoursesPage.Courses")}</Title>
        <div className="filters-container">
          <div
            className={`categories-container ${
              courses?.loading && "categories-container--loading"
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
                        : parsedParams && parsedParams.ids
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
                          "ids[]": newValue,
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
              filterState.title !== undefined ||
              filterState.tag !== undefined) &&
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
                  categories={categoryTree.list || []}
                  label={"Kategoria"}
                  selectedCategories={
                    filterState.categories && filterState.categories.length > 0
                      ? filterState.categories
                      : parsedParams && parsedParams.ids
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
                        "ids[]": newValue,
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
      </StyledHeader>
      {courses &&
      !courses.loading &&
      (!courses.list || !courses.list.data?.length) ? (
        <Title level={4}>{t("NoCourses")}</Title>
      ) : (
        <>
          {courses?.loading ? (
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="loader-wrapper"
            >
              <Spin color={theme.primaryColor} />
            </div>
          ) : (
            <CoursesList>
              <div className="row">
                {courses?.list?.data.map((item) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                    <div className="course-wrapper">
                      <CourseCardWrapper>
                        <CourseCard
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
                          tags={
                            <>
                              {item.tags?.map((item, index) => (
                                <Badge key={index} color={theme.primaryColor}>
                                  <Link
                                    style={{ color: theme.white }}
                                    to={`/courses/?tag=${item.title}`}
                                  >
                                    {item.title}
                                  </Link>
                                </Badge>
                              ))}
                            </>
                          }
                          subtitle={
                            item.subtitle ? (
                              <Text size="12">
                                <Link
                                  style={{ color: theme.primaryColor }}
                                  to={`/courses/${item.id}`}
                                >
                                  <strong>{item.subtitle}</strong>
                                </Link>
                              </Text>
                            ) : undefined
                          }
                          title={
                            <Link to={`/courses/${item.id}`}>{item.title}</Link>
                          }
                          categories={
                            <BreadCrumbs
                              hyphen="/"
                              items={item.categories?.map((category) => (
                                <Link
                                  key={category.id}
                                  to={`/courses/?ids[]=${category.id}`}
                                >
                                  {category.name}
                                </Link>
                              ))}
                            />
                          }
                          actions={
                            <>
                              <Button
                                mode="secondary"
                                onClick={() =>
                                  history.push(`/courses/${item.id}`)
                                }
                              >
                                {t<string>("Start now")}
                              </Button>
                            </>
                          }
                          footer={
                            <>
                              {item.users_count && item.users_count > 0 ? (
                                <IconText
                                  icon={<UserIcon />}
                                  text={`${item.users_count} ${t<string>(
                                    "Students"
                                  )}`}
                                />
                              ) : (
                                ""
                              )}{" "}
                              {item.lessons_count && item.lessons_count > 0 ? (
                                <IconText
                                  icon={<LessonsIcon />}
                                  text={`${item.lessons_count} ${t<string>(
                                    "Lessons"
                                  )}`}
                                />
                              ) : (
                                ""
                              )}
                            </>
                          }
                        />
                      </CourseCardWrapper>
                    </div>
                  </div>
                ))}
              </div>
            </CoursesList>
          )}
        </>
      )}
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
      {courses && courses.list && courses.list.data.length >= 6 && (
        <PromotedCoursesSection courses={courses.list.data} />
      )}
      {categoryTree && (
        <CategoriesSection
          categories={
            categoryTree.list?.filter((category) => !!category.icon) || []
          }
        />
      )}
    </>
  );
};

export default CoursesCollection;
