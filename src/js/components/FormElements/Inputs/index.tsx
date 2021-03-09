import React, { ReactElement } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./index.scss";

interface IInput {
  id: string;
  name: string;
  type: string;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string | number | undefined;
  placeholder?: string;
  error?: string;
  label?: string;
  touched?: boolean;
  isTextArea?: boolean;
  className?: string;
}

export const Input: React.FC<IInput> = ({
  id,
  name,
  type,
  onChange,
  value,
  placeholder,
  label,
  error,
  touched,
  isTextArea,
  className,
}): ReactElement => {
  return (
    <div className={className && className}>
      {label && <label htmlFor={id}>{label}</label>}
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}

      {touched && error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export const Checkbox: React.FC<{
  onChange: (e: boolean) => void;
  error?: string;
  touched?: boolean;
}> = ({ children, onChange, error, touched }): ReactElement => (
  <>
    <label className="checkbox">
      <input
        onChange={(e): void => onChange(e.target.checked)}
        type="checkbox"
      />
      <div className="checkmark"></div>
      {children}
    </label>
    {touched && error ? <div className="error">{error}</div> : null}
  </>
);

export const Switch: React.FC<{
  onChange: (e: boolean) => void;
  error?: string;
  touched?: boolean;
  checked?: boolean;
}> = ({ onChange, error, touched, checked }): ReactElement => (
  <>
    <label className="switch">
      <input
        checked={checked}
        onChange={(e): void => onChange(e.target.checked)}
        type="checkbox"
      />
      <span className="slider" />
    </label>
    {touched && error ? <div className="error">{error}</div> : null}
  </>
);

export const DateInput: React.FC<{
  value: string;
  onChange: (e: Date | [Date, Date]) => void;
  className?: string;
  error?: string;
  label?: string;
  touched?: boolean;
}> = ({ value, className, onChange, label }): ReactElement => {
  return (
    <div className={className && className}>
      {label && <label>{label}</label>}
      <DatePicker
        selected={new Date(value)}
        onChange={(date) => date && onChange(date)}
      />
    </div>
  );
};
