import { useCallback, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";

const StyledDiv = styled("div")<{ isOpen?: boolean }>`
  align-self: end;
  display: flex;
  gap: 10px;
  z-index: 200;
  flex-wrap: wrap;
  justify-content: flex-end;

  .tags-menu-container {
    position: relative;

    .tags-menu {
      position: absolute;
      top: 0;
      right: 0;
      list-style: none;
      padding-top: 12px;

      li {
        margin: 5px 0 5px 10px;
        float: right;
      }
    }
  }

  .badge {
    cursor: pointer;
  }
`;

interface Tag {
  title: string;
}

export interface TagsProps {
  tags: Tag[];
  onTagClick?: (title: string) => void;
}

const Tags = (props: TagsProps) => {
  const { tags, onTagClick } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const firstTags = [...tags].splice(0, 2);
  const otherTags = [...tags].splice(2);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const tagClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, title: string) => {
      if (onTagClick) {
        onTagClick(title);
      }
    },
    [onTagClick]
  );

  return (
    <StyledDiv ref={parentRef} isOpen={open}>
      {firstTags.map((tag: Tag, index) => (
        <Badge
          className="badge"
          color={theme.primaryColor}
          key={index}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            tagClick(e, tag.title)
          }
        >
          {tag.title}
        </Badge>
      ))}
      {otherTags.length > 0 && (
        <div
          className="tags-menu-container"
          onMouseLeave={() => setOpen(false)}
        >
          <Badge
            className="badge"
            color={theme.primaryColor}
            onMouseOver={() => setOpen(true)}
          >
            {`+${otherTags.length}`}
          </Badge>
          {open && (
            <ul
              className="tags-menu"
              style={{
                width:
                  parentRef.current?.getBoundingClientRect().width || "auto",
              }}
            >
              {otherTags.map((otherTag, index) => (
                <li>
                  <Badge
                    key={index}
                    className="badge"
                    onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => tagClick(e, otherTag.title)}
                    color={theme.primaryColor}
                  >
                    {otherTag.title}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </StyledDiv>
  );
};

export default Tags;
