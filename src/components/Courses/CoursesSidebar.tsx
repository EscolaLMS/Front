import React, {
  useCallback,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

import { EscolaLMSContext } from "../../escolalms/context";
import { useTranslation } from "react-i18next";

const CategoryTreeOptions: React.FC<{
  categories: API.Category[];
  nest?: number;
  id?: number;
}> = ({ categories, nest = 0, id }) => {
  return (
    <React.Fragment>
      {categories.map((category) => (
        <React.Fragment key={category.id}>
          <option value={category.id} selected={Number(id) === category.id}>
            {Array.from({ length: nest + 1 }).join(" > ")}
            {category.name}
          </option>
          {category.subcategories.length > 0 && (
            <CategoryTreeOptions
              categories={category.subcategories}
              nest={nest + 1}
              id={id}
            />
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export const CategoryTree = ({ onChange, id }) => {
  const { t } = useTranslation();

  const { categoryTree } = useContext(EscolaLMSContext);
  if (!categoryTree.list) {
    return <pre>loading...</pre>;
  }
  return (
    <div className="select-box">
      <select
        className="form-control"
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        suppressHydrationWarning={true}
      >
        <option value="" selected={!!!id}>
          {t("All Categories")}
        </option>
        <CategoryTreeOptions categories={categoryTree.list} id={id} />
      </select>
    </div>
  );
};

export const Tutors = ({ onChange, id }) => {
  const { t } = useTranslation();

  const { tutors } = useContext(EscolaLMSContext);

  return (
    <div className="select-box">
      <select
        className="form-control"
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        suppressHydrationWarning={true}
      >
        <option value="" selected={!!!id}>
          {t("All Tutors")}
        </option>
        {tutors.list?.map((tutor) => (
          <option
            key={tutor.id}
            value={tutor.id}
            selected={Number(id) === tutor.id}
          >
            {tutor.first_name} {tutor.last_name}
          </option>
        ))}
      </select>
    </div>
  );
};

const CoursesSidebar = ({
  onSearch,
  onTag,
  onCategory,
  onTutor,
  multiple = false,
  params,
}) => {
  const { uniqueTags, fetchTutors } = useContext(EscolaLMSContext);
  const [tags, setTags] = useState<API.Tag[]>([]);
  const hasTags = useCallback((tags: API.Tag[], tag) => {
    return tags.findIndex((stag) => stag.title === tag.title) !== -1;
  }, []);
  const toggleTag = useCallback(
    (tag: API.Tag) => {
      setTags((prevState) => {
        if (multiple) {
          return hasTags(tags, tag)
            ? prevState.filter((stag) => stag.title !== tag.title)
            : [...prevState, tag];
        } else {
          return hasTags(tags, tag) ? [] : [tag];
        }
      });
    },
    [tags]
  );

  useEffect(() => {
    onTag && onTag(multiple ? tags : tags[0]);
  }, [tags, multiple]);

  useEffect(() => {
    fetchTutors();
  }, []);

  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current.value = params?.title ? params?.title : "";
  }, [params]);

  return (
    <div className="widget-area">
      <div className="widget widget_search">
        <h3 className="widget-title">{t("Search")}</h3>

        <form
          className="search-form"
          onSubmit={(e) => {
            onSearch && inputRef.current && onSearch(inputRef.current.value);
            e.preventDefault();
          }}
        >
          <label>
            <span className="screen-reader-text">{t("Search for")}:</span>
            <input
              ref={inputRef}
              type="search"
              className="search-field"
              placeholder={t("Search")}
            />
          </label>
          <button type="submit">
            <i className="bx bx-search-alt"></i>
          </button>
        </form>
      </div>

      <div className="widget widget_search">
        <h3 className="widget-title">{t("Categories")}</h3>

        <CategoryTree id={params?.category_id} onChange={onCategory} />
      </div>

      <div className="widget widget_search">
        <h3 className="widget-title">{t("Tutors")}</h3>

        <Tutors id={params?.author_id} onChange={onTutor} />
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">{t("Popular Tags")}</h3>

        <div className="tagcloud" suppressHydrationWarning={true}>
          {uniqueTags?.list?.map((tag) => (
            <a
              href="#"
              key={tag.title}
              className={
                params?.tag ? (params?.tag === tag.title ? "active" : "") : ""
              }
              onClick={(e) => {
                e.preventDefault();
                toggleTag(tag);
              }}
            >
              {tag.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSidebar;
