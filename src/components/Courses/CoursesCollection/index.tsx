//@ts-nocheck - TODO: Add "ids" type to Course request type in sdk
import React, { useContext, useEffect, useState } from "react";
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
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CloseIcon } from "../../../icons";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import Pagination from "@/components/Pagination";
import { isMobile } from "react-device-detect";
import PromotedCoursesSection from "@/components/PromotedCoursesSection";
import CategoriesSection from "@/components/CategoriesSection";

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  padding: ${isMobile ? "60px 20px 20px 20px" : "140px 40px 30px"};
  margin-bottom: ${isMobile ? "100px" : "40px"};
  position: relative;
  z-index: 100;

  h1 {
    color: ${({ theme }) => theme.white};
    margin-bottom: 35px;
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
        justify-content: space-between;
        width: 100%;
      }
      @media (max-width: 575px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        row-gap: 15px;
      }
      .single-select {
        min-width: 130px;
        &--category {
          min-width: 200px;
          div {
            border: none !important;
            &:not(.categories-dropdown-options) {
              background: transparent !important;
              color: ${({ theme }) => theme.white};
            }
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
  }
`;

const CoursesCollection: React.FC = () => {
  const { params, setParams, courses } = useContext(CoursesContext);
  const { categoryTree, uniqueTags } = useContext(EscolaLMSContext);
  const [parsedParams, setParsedParams] = useState<
    API.CourseParams | undefined
  >();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [typeSelectedValue, setTypeSelectedValue] = useState<
    string | undefined
  >(undefined);
  const [tagSelectValue, setTagSelectValue] = useState<string | undefined>(
    undefined
  );
  const [paramsLoaded, setParamsLoaded] = useState(false);
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();

  const typeFilters = [
    { label: "Wszystkie", value: "false" },
    { label: "Darmowe", value: "true" },
  ];
  const tagsFilters = uniqueTags.list
    ? uniqueTags.list?.map((item) => {
        return { label: String(item.title), value: String(item.title) };
      })
    : [];
  useEffect(() => {
    params && setParamsLoaded(true);
    params &&
      setTypeSelectedValue(
        params.free === true
          ? "true"
          : params.free === false
          ? "false"
          : undefined
      );
    params && setTagSelectValue(params.tag || undefined);
  }, [params]);

  useEffect(() => {
    paramsLoaded &&
      setParsedParams(
        qs.parse(location.search, {
          arrayFormat: "bracket",
          parseNumbers: true,
        })
      );
  }, [paramsLoaded]);

  // useEffect(() => {
  //   parsedParams &&
  //     selectedCategories.length === 0 &&
  //
  //     setSelectedCategories(parsedParams.ids);
  // }, [paramsLoaded]);

  console.log(params);
  console.log(parsedParams);
  console.log(selectedCategories);
  return (
    <>
      <StyledHeader>
        <Title level={1}>Kursy</Title>
        <div className="filters-container">
          <div
            className={`categories-container ${
              courses?.loading && "categories-container--loading"
            }`}
          >
            <div className="categories-row">
              {parsedParams &&
                (parsedParams.ids ||
                  parsedParams.free ||
                  parsedParams.tag ||
                  selectedCategories.length > 0) &&
                isMobile && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories([]);
                      setTypeSelectedValue(undefined);
                      setTagSelectValue(undefined);
                      setParams && setParams({ page: 1 });
                      setParsedParams({});
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
                      selectedCategories.length > 0
                        ? selectedCategories
                        : parsedParams && parsedParams.ids
                    }
                    drawerTitle={
                      <Title
                        level={5}
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        Kategoria
                      </Title>
                    }
                    handleChange={(value) => {
                      const newValue = value;
                      setSelectedCategories(newValue);
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
              {!(selectedCategories.length > 0)
                ? parsedParams &&
                  parsedParams.ids &&
                  categoryTree?.list

                    ?.filter((item) => parsedParams.ids.indexOf(item.id) > -1)
                    .map((category) => (
                      <Text key={category.id} className="single-filter">
                        {category.name}
                      </Text>
                    ))
                : categoryTree?.list
                    ?.filter((item) => selectedCategories.indexOf(item.id) > -1)
                    .map((category) => (
                      <Text key={category.id} className="single-filter">
                        {category.name}
                      </Text>
                    ))}
              {params && params.free && (
                <Text className="single-filter">Darmowe</Text>
              )}
              {params && params.free === false && (
                <Text className="single-filter">Wszystkie</Text>
              )}
              {params?.tag && (
                <Text className="single-filter">{params?.tag}</Text>
              )}
            </div>
            {parsedParams &&
              (parsedParams.ids ||
                parsedParams.free ||
                parsedParams.tag ||
                selectedCategories.length > 0) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([]);
                    setTypeSelectedValue(undefined);
                    setTagSelectValue(undefined);
                    setParams && setParams({ page: 1 });
                    setParsedParams({});
                  }}
                  className="clear-btn clear-btn--desktop"
                >
                  <CloseIcon />
                </button>
              )}
          </div>
          <div className="selects-row">
            {!isMobile && (
              <div className="single-select single-select--category">
                <Categories
                  categories={categoryTree.list || []}
                  label={"Kategoria"}
                  selectedCategories={
                    selectedCategories.length > 0
                      ? selectedCategories
                      : parsedParams && parsedParams.ids
                  }
                  drawerTitle={
                    <Title
                      level={5}
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      Kategoria
                    </Title>
                  }
                  handleChange={(value) => {
                    const newValue = value;
                    setSelectedCategories(newValue);
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
            <div className="single-select">
              <Dropdown
                onChange={(e) => {
                  setTypeSelectedValue(e.value);
                  setParams &&
                    setParams({
                      ...params,
                      page: 1,
                      free: e.value === "true" ? true : false,
                    });
                }}
                placeholder="Typ szkolenia"
                value={typeSelectedValue}
                options={typeFilters}
              />
            </div>
            <div className="single-select">
              <Dropdown
                onChange={(e) => {
                  setTagSelectValue(e.value);
                  setParams &&
                    setParams({
                      ...params,
                      page: 1,
                      tag: e.value,
                    });
                }}
                value={tagSelectValue}
                placeholder="Tag"
                options={[{ label: "Wszystkie", value: "" }, ...tagsFilters]}
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
        <CoursesList>
          <div className="row">
            {courses?.list?.data.map((item) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                <div className="course-wrapper">
                  <CourseCard
                    mobile={isMobile}
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
      )}
      {courses?.loading && (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="loader-wrapper"
        >
          <Spin color={theme.primaryColor} />
        </div>
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
        <CategoriesSection categories={categoryTree.list || []} />
      )}
    </>
  );
};

export default CoursesCollection;
