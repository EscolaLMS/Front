import { useCallback, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { API } from "@escolalms/sdk/lib";

const StyledDiv = styled("div")`
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
      display: flex;
      flex-direction: column;
      text-align: right;
      gap: 10px;
      top: 0%;
      right: 0;
      list-style: none;
      padding-top: 12px;
      height: 100px;
      overflow-y: scroll;
      background-color: ${(props) => props.theme.primaryColor};
      max-width: 150px;
      width: 100%;
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
  const [open, setOpen] = useState(true);
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
        <div className="tags-menu-container" onMouseLeave={() => setOpen(true)}>
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
