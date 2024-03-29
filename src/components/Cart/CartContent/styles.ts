import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import styled, { css } from "styled-components";

export const CartPageStyled = styled.section<{ $isMobile: boolean }>`
  min-height: calc(100vh - 452px);

  .module-wrapper {
    margin-bottom: 55px;
    @media (max-width: 991px) {
      margin-bottom: 33px;
    }
    &.billing-info {
      h4 {
        margin-bottom: 10px;
      }
    }
    h4 {
      @media (max-width: 991px) {
        text-align: center;
      }
    }
  }
  .products-container {
    row-gap: 20px;
  }
  .payments-form {
    .collapse-wrapper {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    .input-wrapper {
      margin-bottom: 30px;
    }
  }

  .billing-form {
    padding: 16px 20px;
    border-radius: ${({ theme }) => theme.cardRadius}px;
    background: ${({ theme }) =>
      getStylesBasedOnTheme(
        theme.mode,
        theme.dm__primaryColor,
        theme.white,
        theme.cardBackgroundColor
      )};
    &__form {
      max-width: 500px;
      .lsm-input {
        margin-bottom: 20px;
        input {
          background-color: ${({ theme }) => theme.gray3};
        }
      }
    }
    &__mydata {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
      p {
        margin-bottom: 0;
        span {
          font-weight: 700;
        }
      }
    }
  }
  .slider-section {
    margin-top: 70px;
  }
  .summary-box-wrapper {
    position: sticky;
    top: 100px;

    ${({ $isMobile }) =>
      $isMobile &&
      css`
        position: fixed;
        top: unset;
        bottom: 0;
        z-index: 10;
        width: 100%;
        left: 0;
        z-index: 100;
      `};
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 192px 20px;
    text-align: center;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.white : theme.gray1};
    row-gap: 20px;
    border-radius: ${({ theme }) => theme.cardRadius}px;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      padding: 80px 20px;
    }
  }
  .slider-section {
    h4 {
      @media (max-width: 575px) {
        padding-right: 45%;
      }
    }
  }
`;
