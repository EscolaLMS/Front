import styled from "styled-components";

export const StyledDatePicker = styled.div`
  .react-datepicker {
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray3};
    border-radius: ${({ theme }) => theme.buttonRadius || 2}px;
    width: 100%;
    margin-top: 0.5rem;
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  .react-datepicker__day--selected:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    opacity: 0.3;
  }

  .react-datepicker__month-container {
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 14px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    line-height: 3em;
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    opacity: 0.3;
    color: #ffffff;
  }

  .react-datepicker__header {
    background-color: transparent;
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray3};
    border-top-right-radius: ${({ theme }) => theme.buttonRadius || 2}px;
    border-top-left-radius: ${({ theme }) => theme.buttonRadius || 2}px;
  }

  .react-datepicker__input-time-container {
    text-align: center;
    margin: 15px 0;
  }

  .react-datepicker__input-time-container .react-datepicker-time__caption {
    font-size: 14px;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input,
  .react-datepicker__time-list-item input {
    font-size: 14px;
    padding: 1em;
    border-radius: ${({ theme }) => theme.buttonRadius || 2}px;
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray3};
    border-width: 1px;
    border-style: solid;
  }

  .react-datepicker__time-list-item {
    border-radius: ${({ theme }) => theme.buttonRadius || 2}px;
    height: fit-content !important;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: red !important;
  }

  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input:focus {
    outline: none;
  }
`;
