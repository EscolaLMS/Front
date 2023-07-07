import styled from "styled-components";

export const StyledCourse = styled.section`
  padding-bottom: 110px;
  .main-title {
    margin-bottom: 20px;
  }
  .course-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .course-program-finish-modal {
    font-family: "Mulish", sans-serif;
    background: #f8f8f8;
    inset: 0;
    border: 1px solid #157493;
    padding: 16px;
    display: grid;
    place-content: center;
    gap: 16px;
    height: 100%;
    max-height: 500px;

    p {
      text-align: center;
      margin: 0;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
    }

    &__paragraph {
      font-size: 18px;
    }

    &__buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      justify-content: center;
      margin-top: 8px;
    }
  }
`;
