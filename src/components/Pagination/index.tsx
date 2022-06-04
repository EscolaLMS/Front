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
    &--left {
      transform: rotate(45deg);
      margin-right: 10px;
    }
    &--right {
      transform: rotate(-135deg);
      margin-left: 10px;
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

const Pagination: React.FC<{
  currentPage: number;
  total: number;
  perPage: number;
  onPage: (page: number) => void;
}> = ({ currentPage, total, perPage, onPage }) => {
  const lastPage = Math.ceil(total / perPage);
  return (
    <StyledPagination>
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
      {Array.from({ length: lastPage }).map((page, i) => (
        <Link
          onClick={(e) => {
            e.preventDefault();
            onPage(i + 1);
          }}
          to={`#!page-${i + 1}`}
          key={`#${i + 1}`}
          className="number"
        >
          <Text
            className={i + 1 === currentPage ? "current" : ""}
            size="16"
            aria-current="page"
          >
            {i + 1}
          </Text>
        </Link>
      ))}
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
    </StyledPagination>
  );
};

export default Pagination;
