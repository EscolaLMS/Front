import React, { ReactElement, useState, useRef, useMemo } from "react";

import useOutsideClick from "../../../hooks/clickOutside";

import Icon from "../../Icon";
import Loader from "../../Loader";

import "./index.scss";

export interface IOption {
  value: number | string;
  label: string;
  parent?: number | undefined;
}

export interface ISelect {
  data: Array<IOption>;
  className?: string;
  loading: boolean;
  onSelect: (option: IOption) => void;
  selected: string | number;
  error?: string;
  label?: string;
  touched?: boolean;
}

const Select: React.FC<ISelect> = ({
  data,
  loading,
  onSelect,
  selected,
  className,
  error,
  label,
  touched,
}): ReactElement => {
  const [showOptions, setShowOptions] = useState(false);

  const ref = useRef(null);

  const onSelectOption = (option: IOption, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect({
      value: option.value,
      label: option.label,
    });
    setShowOptions(false);
  };

  const defaultValue = useMemo(() => {
    return data?.find(
      (option: IOption) => option.value.toString() === selected
    );
  }, [data, selected]);

  useOutsideClick(ref, () => {
    if (showOptions) setShowOptions(false);
  });

  return (
    <>
      <div className={`select ${className}`}>
        {loading && <Loader position="left" />}
        {label && <div className="label">{label}</div>}
        {!loading && (
          <>
            <div
              className={`select__value ${
                showOptions ? "select__value--open" : ""
              }`}
              onClick={() => setShowOptions(!showOptions)}
              ref={ref}
            >
              <span className="select__value__label">
                {defaultValue?.label}{" "}
              </span>
              <Icon name="arrow-dropdown" />
            </div>

            {showOptions && (
              <ul>
                {data.length > 0 &&
                  data
                    .filter((option: IOption) => !option?.parent)
                    .map((option: IOption) => {
                      return (
                        <li
                          className={
                            defaultValue?.value === option.value
                              ? "select__option--active"
                              : ""
                          }
                          onClick={(e) => onSelectOption(option, e)}
                          key={option.value || "all"}
                        >
                          <span>{option.label}</span>
                          {data.find(
                            (subOption) =>
                              subOption.parent &&
                              subOption.parent === option.value
                          ) && (
                            <ul>
                              {data
                                .filter(
                                  (subOption: IOption) =>
                                    subOption.parent === option.value
                                )
                                .map((subOption: IOption) => {
                                  return (
                                    <li
                                      className={
                                        defaultValue?.value === subOption.value
                                          ? "select__option--active"
                                          : ""
                                      }
                                      onClick={(e) =>
                                        onSelectOption(subOption, e)
                                      }
                                      key={subOption.value}
                                    >
                                      <span>{subOption.label}</span>
                                    </li>
                                  );
                                })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
              </ul>
            )}
          </>
        )}
        {touched && error ? <div className="error">{error}</div> : null}
      </div>
    </>
  );
};

export default Select;
