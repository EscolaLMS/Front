import { useCallback, useRef } from "react";
import styled from "styled-components";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";

const StyledDiv = styled("div")<{ isOpen?: boolean }>`
  .more-icon {
    border: 1px solid;
    border-radius: 50%;
    padding: 4px;
    margin-left: 12px;
    font-size: 0.75em;
  }

  .category-name {
    cursor: pointer;
    padding: 2px 4px;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.black};
    border-radius: 3px;
    font-size: 11px;
    &:hover {
      text-decoration: underline;
    }
  }

  .categories-menu-container {
    position: relative;

    .categories-menu {
      position: absolute;
      top: 0;
      right: 0;
      list-style: none;
      background-color: #f2f2f2;
      margin: 4px 0;

      li {
        margin: 4px 0;
      }
    }
  }
`;

export interface CategoriesProps {
  categories: EscolaLms.Categories.Models.Category[] | undefined;
  onCategoryClick?: (id: number) => void;
}

const CategoriesBreadCrumbs = (props: CategoriesProps) => {
  const { categories, onCategoryClick } = props;
  // const [open, setOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const firstCategories = categories || [];
  // const otherCategories = categories ? [...categories].splice(2) : [];

  const categoryClick = useCallback(
    (id: number) => {
      if (onCategoryClick) {
        onCategoryClick(id);
      }
    },
    [onCategoryClick]
  );

  return (
    <StyledDiv ref={parentRef}>
      <BreadCrumbs
        hyphen=""
        items={firstCategories?.map((category, index) => (
          <>
            <span
              className="category-name"
              key={category.name + index}
              onClick={() => categoryClick(category.id)}
              aria-hidden="true"
            >
              {category.name}
            </span>
            {/* {index === firstCategories.length - 1 &&
              otherCategories.length > 0 && (
                <span
                  className="more-icon"
                  onMouseOver={() => setOpen(true)}
                  onFocus={() => setOpen(true)}
                  aria-hidden={true}
                >{`+${otherCategories.length}`}</span>
              )} */}
          </>
        ))}
      />

      {/* {otherCategories.length > 0 && (
        <div
          className="categories-menu-container"
          onMouseLeave={() => setOpen(false)}
        >
          {open && (
            <ul
              className="categories-menu"
              style={{
                width:
                  parentRef.current?.getBoundingClientRect().width || "auto",
              }}
            >
              <BreadCrumbs
                hyphen=""
                items={otherCategories?.map((category) => (
                  <li
                    className="category-name"
                    onClick={() => categoryClick(category.id)}
                    aria-hidden={true}
                  >
                    {category.name}
                  </li>
                ))}
              />
            </ul>
          )}
        </div>
      )} */}
    </StyledDiv>
  );
};

export default CategoriesBreadCrumbs;
