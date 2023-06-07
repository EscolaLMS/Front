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
    width: 100%;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 14px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 4em;
    line-height: 4em;
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
`;
