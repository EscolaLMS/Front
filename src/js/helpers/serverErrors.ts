import { IError } from "../interfaces/redux";

export const serverErrors = (errorCode: number, errors: IError): string => {
  errors && console.error(errors);
  return `${errorCode} - ${
    errors.errors
      ? Object.keys(errors?.errors).map(
          (error: string) => errors?.errors && errors?.errors[error]
        )
      : errors.message
  }`;
};
