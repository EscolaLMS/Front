import React, { ReactElement, useState } from "react";
import { useFormik, FormikErrors } from "formik";
import Button from "../../components/FormElements/Button/Button";
import { Input, Checkbox } from "../../components/FormElements/Inputs";
import { mailValidator } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  createNewUser,
  loginUser,
  forgotPassword,
  setNewPassword,
} from "../../redux/auth/actions";
import { IAuthForm } from "../../interfaces/auth";
import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";

const AuthForm: React.FC<{
  isRegister: boolean;
  resetPassword?: boolean;
  forResetPassword?: IAuthForm;
}> = ({ isRegister, resetPassword, forResetPassword }): ReactElement => {
  const [forgottenMode, setForgottenMode] = useState(false);
  const dispatch: Dispatch = useDispatch();

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      terms: false,
      password_confirmation: "",
      phone: "",
    },
    validate: (values): FormikErrors<IAuthForm> => {
      const errors: FormikErrors<IAuthForm> = {};
      if (!values.first_name && isRegister) {
        errors.first_name = "Required";
      }

      if (!values.last_name && isRegister) {
        errors.last_name = "Required";
      }

      if (!values.email && !resetPassword) {
        errors.email = "Required";
      } else if (mailValidator(values.email) && !resetPassword) {
        errors.email = "Wrong email address";
      }

      if (!values.password && !forgottenMode) {
        errors.password = "Required";
      } else if (values.password.length < 8 && (isRegister || resetPassword)) {
        errors.password = "Minimum eight characters";
      }

      if (!values.terms && isRegister) {
        errors.terms = "Required";
      }

      if (!values.password_confirmation && isRegister) {
        errors.password_confirmation = "Required";
      } else if (
        values.password !== values.password_confirmation &&
        isRegister
      ) {
        errors.password_confirmation = "Passwords don't match ";
      }

      return errors;
    },
    onSubmit: (values): void => {
      if (isRegister) {
        dispatch(createNewUser(values));
      } else {
        if (!forgottenMode) {
          if (resetPassword && forResetPassword) {
            dispatch(
              setNewPassword({
                ...forResetPassword,
                password: values.password,
              })
            );
          } else {
            dispatch(
              loginUser({ email: values.email, password: values.password })
            );
          }
        } else {
          dispatch(
            forgotPassword({
              email: values.email,
              return_url: `${process.env.REACT_APP_DOMAIN}/#/reset-password`,
            })
          );
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className={`col-md-${isRegister ? "12" : "24"}`}>
          {!resetPassword && (
            <Input
              label="Email"
              className="input margin-15"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              placeholder="Email Address"
            />
          )}

          {!forgottenMode && (
            <Input
              label="Password"
              className="input margin-15"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              placeholder="Password"
              error={formik.errors.password}
            />
          )}

          {isRegister && (
            <Input
              label="Password confirmation"
              className="input margin-15"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password_confirmation}
              placeholder="Password confirmation"
              error={formik.errors.password_confirmation}
              touched={formik.touched.password_confirmation}
            />
          )}
          {!isRegister && !resetPassword && (
            <span
              className="authform__action"
              onClick={() => setForgottenMode(!forgottenMode)}
            >
              {forgottenMode ? "Back" : "Forgotten?"}
            </span>
          )}
          {isRegister && (
            <Checkbox
              touched={formik.touched.terms}
              error={formik.errors.terms}
              onChange={(
                e
              ): Promise<
                FormikErrors<{
                  email: string;
                  password: string;
                  terms: boolean;
                } | void>
              > => formik.setFieldValue("terms", e)}
            >
              <span>
                Accept{" "}
                <a target="blank" href="/">
                  Terms & Conditions
                </a>
              </span>
            </Checkbox>
          )}
        </div>
        <div className="col-md-12">
          {isRegister && (
            <>
              <Input
                label="Name"
                className="input margin-15"
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
                error={formik.errors.first_name}
                placeholder="Name"
                touched={formik.touched.first_name}
              />
              <Input
                label="Surname"
                className="input margin-15"
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
                error={formik.errors.last_name}
                placeholder="Surname"
                touched={formik.touched.last_name}
              />
              <Input
                label="Phone number"
                className="input margin-15"
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
                placeholder="Surname"
                touched={formik.touched.phone}
              />
            </>
          )}
        </div>
      </div>

      <Button loading={auth?.loading} className="primary" type="submit">
        {isRegister
          ? "Register"
          : forgottenMode
          ? "Send"
          : resetPassword
          ? "Reset password"
          : "Log me"}
      </Button>
    </form>
  );
};

export default AuthForm;
