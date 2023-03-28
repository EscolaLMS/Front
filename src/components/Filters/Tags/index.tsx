import { FC, useCallback, useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CloseIcon } from "../../../icons";
import { FiltersState } from "@/types/filters";

const StyledTags = styled("div")`
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

  .tag {
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
    color: ${({ theme }) => (isMobile ? theme.primaryColor : theme.white)};
  }

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
`;

interface FiltersTagsProps {
  filters: FiltersState;
  onReset: () => void;
}

// TODO: Add tags from courses
const FiltersTags: FC<FiltersTagsProps> = ({ filters, onReset }) => {
  const { categoryTree } = useContext(EscolaLMSContext);
  const isButton = !!filters?.categories?.length || !!filters?.name;

  const renderText = useCallback(
    (value: string) => <Text className="tag">{value}</Text>,
    []
  );

  return (
    <StyledTags>
      {!!filters?.categories &&
        categoryTree.list
          ?.filter((item) => filters.categories?.indexOf(item.id) > -1)
          .map((category) => renderText(category.name))}
      {!!filters?.name && renderText(filters.name)}
      {isButton && (
        <button
          type="button"
          onClick={() => {
            onReset();
          }}
          className="clear-btn clear-btn--desktop"
        >
          <CloseIcon />
        </button>
      )}
    </StyledTags>
  );
};

export default FiltersTags;
