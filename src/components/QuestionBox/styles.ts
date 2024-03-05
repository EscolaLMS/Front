import styled from "styled-components";

export const QuestionBoxWrapper = styled.form`
  .question-box {
    &__title {
      font-size: 24px;
      text-align: center;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 13px;
    }

    &__content {
      padding: 30px 23px 0 23px;
      text-align: center;

      &--title {
        font-size: 16px;
      }
      &--description {
        font-size: 16px;
        margin: 11px 0;
      }
      &--textarea-title {
        font-size: 16px;
        margin: 11px 0;
        font-weight: bold;
      }
      &--textarea {
        background: #f8f8f8;
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
      &--buttons {
        margin-top: 37px;
      }
    }
  }
`;
