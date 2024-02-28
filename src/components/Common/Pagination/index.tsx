import React from "react";
import styled from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Link } from "react-router-dom";

const StyledPagination = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    text-decoration: none !important;
  }
  .arrow {
    width: 10px;
    height: 10px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.primaryColor};
    margin: 0 10px;
    &--left {
      transform: rotate(45deg);
    }
    &--right {
      transform: rotate(-135deg);
    }
  }
  .number {
    margin: 0 8px;
    p {
      opacity: 0.5;
      &.current {
        color: ${({ theme }) => theme.primaryColor}!important;
        font-weight: 700;
        opacity: 1;
      }
    }
  }
`;

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination: React.FC<{
  currentPage: number;
  total: number;
  perPage: number;
  onPage: (page: number) => void;
  pageNeighbours?: number;
}> = ({ currentPage, total, perPage, onPage, pageNeighbours = 2 }) => {
  const lastPage = Math.ceil(total / perPage);

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (lastPage > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(lastPage - 1, currentPage + pageNeighbours);
      let pages: (string | number)[] = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = lastPage - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, lastPage];
    } else if (currentPage < lastPage && currentPage === 1) {
      return [...range(1, lastPage), RIGHT_PAGE];
    } else if (currentPage > 1 && currentPage !== lastPage) {
      return [LEFT_PAGE, ...range(1, lastPage), RIGHT_PAGE];
    } else if (currentPage > 1 && currentPage === lastPage) {
      return [LEFT_PAGE, ...range(1, lastPage)];
    }

    return range(1, lastPage);
  };

  return (
    <StyledPagination>
      {fetchPageNumbers().map((page) => {
        if (page === LEFT_PAGE) {
          return (
            <a
              href="#!prev_page"
              className="prev page-numbers"
              onClick={(e) => {
                e.preventDefault();
                onPage(currentPage <= 1 ? 1 : currentPage - 1);
              }}
            >
              <div className="arrow arrow--left" />
            </a>
          );
        }
        if (page === RIGHT_PAGE) {
          return (
            <a
              href="#!next_page"
              className="next page-numbers"
              onClick={(e) => {
                e.preventDefault();
                onPage(currentPage === lastPage ? lastPage : currentPage + 1);
              }}
            >
              <div className="arrow arrow--right" />
            </a>
          );
        }
        return (
          <Link
            onClick={(e) => {
              e.preventDefault();
              onPage(Number(page));
            }}
            to={`#!page-${Number(page)}`}
            key={`#${Number(page)}`}
            className="number"
          >
            <Text
              className={Number(page) === currentPage ? "current" : ""}
              size="16"
              aria-current="page"
            >
              {Number(page)}
            </Text>
          </Link>
        );
      })}
    </StyledPagination>
  );
};

export default Pagination;
