import styled, { keyframes, css } from "styled-components";

const scaleAndTranslateIn = keyframes`
  from {
    transform:  translateY(200%);
  }
  to {
    transform:  translateY(0%);
  }
`;

const scaleAndTranslateOut = keyframes`
  from {
    transform:  translateY(0);
  }
  to {
    transform:  translateY(200%);
  }
`;

export const StyledChatWindow = styled.div<{
  $closeAnimation: boolean;
  $isMobile: boolean;
}>`
  border-radius: 22px 21px 0px 0px;
  min-width: ${({ $isMobile }) => ($isMobile ? "100%" : "380px")};
  box-shadow: 0px 0px 15px #00000029;
  height: 100%;
  ${({ $closeAnimation }) =>
    $closeAnimation
      ? css`
          animation: ${scaleAndTranslateOut} 0.5s ease forwards;
        `
      : css`
          animation: ${scaleAndTranslateIn} 0.5s ease forwards;
        `}

  .chatwindow__header {
    background-color: ${({ theme }) => theme.primaryColor};
    padding: 13px 25px;
    border-radius: 22px 21px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${({ theme }) => theme.white};
      margin-bottom: 0;
    }

    &--close {
      all: unset;
      color: ${({ theme }) => theme.white};
      cursor: pointer;
      min-height: 20px;
      span {
        display: block;
        width: 17px;
        height: 2px;
        background: ${({ theme }) => theme.white};
      }
    }
  }
  .chatwindow__content {
    padding: 12px;
    min-height: 200px;
    height: fit-content;

    background-color: ${({ theme }) => theme.white};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--messages {
      max-height: 50vh;
      overflow-y: auto;
      &__empty {
        text-align: center;
      }
    }
    &--input {
      border: 1px solid ${({ theme }) => theme.gray3};
      padding: 10px 13px;
      border-radius: 21px;
      background: ${({ theme }) => theme.gray4} 0% 0% no-repeat padding-box;
      display: flex;
      position: relative;

      input {
        all: unset;
        font-family: ${({ theme }) => theme.font};
        font-size: 14px;
        width: 100%;
        padding-right: 34px;
      }

      button {
        all: unset;
        cursor: pointer;
        background: ${({ theme }) => theme.white};
        border-radius: 50%;
        width: 34px;
        height: 34px;
        position: absolute;
        top: 1px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &--error {
      text-align: center;
    }
  }
`;
