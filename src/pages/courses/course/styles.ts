import styled, { createGlobalStyle } from "styled-components";
import { isMobile } from "react-device-detect";

export const StyledCoursePage = styled.div`
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray5)};
    }
    &.padding-right {
      padding-right: 150px;
      @media (max-width: 991px) {
        padding-right: 70px;
      }
      @media (max-width: 768px) {
        padding-right: 0;
      }
    }
  }
  .sidebar-col {
    padding-bottom: 45px;
  }
  .course-main-info {
    .image-wrapper {
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 35px;

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;
      @media (max-width: 991px) {
        margin: 35px 0 0;
      }
      @media (max-width: 374px) {
        flex-direction: column;
        row-gap: 16px;
      }
      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
        margin-bottom: 0;
        flex-wrap: wrap;
        @media (max-width: 991px) {
          column-gap: 0;
          margin-top: 55px;
        }
        @media (max-width: 374px) {
          flex-direction: row;
        }
        .single-label {
          @media (max-width: 991px) {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .course-tutor {
    .ranking-row {
      display: none !important;
    }
  }
  .course-companies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .companies-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 70px;
      .single-company {
        max-height: 85px;
        max-width: 65px;
      }
      @media (max-width: 768px) {
        column-gap: 0;
        justify-content: space-between;
        width: 100%;
      }
    }

    p {
      max-width: 220px;
      margin-right: 50px;
    }
  }
  .course-description {
    padding: 50px 45px;
    margin: 45px 0;
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
    border-radius: ${({ theme }) => theme.cardRadius}px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .course-related-courses {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
    padding: 60px 0 90px;
    .slick-dots {
      top: -65px;
      right: 80px;
      @media (max-width: 575px) {
        right: 0;
      }
    }
    .content-container {
      position: relative;
      overflow: hidden;
      &:first-of-type {
        margin-bottom: 60px;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
      h4 {
        @media (max-width: 575px) {
          padding-right: 50%;
        }
      }
      .slider-wrapper {
        a {
          text-decoration: none !important;
        }
        @media (max-width: 575px) {
          margin-left: -50px;

          .image-section,
          img {
            max-height: 180px;
          }
        }
      }
    }
  }
  .course-tutor {
    a {
      text-decoration: none !important;
    }
  }
  .sidebar-wrapper {
    width: 100%;
    left: 0;
    position: ${isMobile ? "fixed" : "sticky"};
    top: ${isMobile ? "unset" : "130px"};
    bottom: ${isMobile ? "0" : "unset"};
    z-index: 100;
  }

  .single-content {
    box-sizing: border-box;
  }
`;

export const ModalOverwriteGlobal = createGlobalStyle`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`;
