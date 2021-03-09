import React, { FunctionComponent, ReactElement } from "react";
import "./Button.scss";

type ButtonType = JSX.IntrinsicElements["button"]["type"];

interface IButton {
  /** description for Styleguidist */
  className?: string;
  /** description for Styleguidist */
  loading?: boolean;
  /** description for Styleguidist */
  disabled?: boolean;
  /** description for Styleguidist */
  children?: React.ReactNode;
  /** description for Styleguidist */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  type?: ButtonType;
}

const Button: FunctionComponent<IButton> = ({
  className,
  loading = false,
  disabled = false,
  children,
  onClick,
  type,
}): ReactElement => {
  return (
    <button
      type={type}
      disabled={!!disabled}
      className={[
        "button",
        className ? className : "",
        loading && "loading",
        disabled && "disabled",
      ].join(" ")}
      onClick={(e): void => onClick && onClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
