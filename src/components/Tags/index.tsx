import { useCallback, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { API } from "@escolalms/sdk/lib";

const StyledDiv = styled("div")`
  align-self: end;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;

  .tags-menu-container {
    position: relative;

    .tags-menu {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 4px;
      list-style: none;
      padding: 4px 0;
      height: fit-content;
      max-height: 230px;
      overflow-y: scroll;
      background-color: ${(props) => props.theme.primaryColor};
      width: fit-content;
      margin: 0;

      li {
        width: 100%;
      }
    }
  }

  .badge {
    cursor: pointer;
  }
`;

export interface TagsProps {
  tags: string[] | API.Tag[] | null | undefined;
  onTagClick?: (title: string) => void;
}

const Tags = (props: TagsProps) => {
  const { tags, onTagClick } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const firstTags = tags ? [...tags].splice(0, 2) : [];
  const otherTags = tags ? [...tags].splice(2) : [];
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
    <StyledDiv ref={parentRef}>
      {firstTags.map((tag, index) => {
        const tagTitle = (tag as API.Tag).title ?? tag;
        return (
          <Badge
            className="badge"
            color={theme.primaryColor}
            key={index}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              tagClick(e, tagTitle)
            }
          >
            {tagTitle}
          </Badge>
        );
      })}
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
            <ul className="tags-menu">
              {otherTags.map((otherTag, index) => {
                const otherTagTitle = (otherTag as API.Tag).title ?? otherTag;
                return (
                  <li>
                    <Badge
                      key={index}
                      className="badge"
                      onClick={(
                        e: React.MouseEvent<HTMLDivElement, MouseEvent>
                      ) => tagClick(e, otherTagTitle)}
                      color={theme.primaryColor}
                    >
                      {otherTagTitle}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </StyledDiv>
  );
};

export default Tags;
