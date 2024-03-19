import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    box-shadow: 0px 5px 23px #00000029;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.font};
    font-weight: bold;
    padding: 0;
    min-height: auto;
  }

  .Toastify__toast-body {
    padding: 12px 24px;
  }

  .Toastify__toast-icon {
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: #00b70e;
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: #ee312f;
  }
`;
