import React, { ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { changePassword } from "../../redux/auth/actions";

import { useFormik, FormikErrors } from "formik";
import Button from "../../components/FormElements/Button/Button";
import { Input } from "../../components/FormElements/Inputs";

import { IChangePass } from "../../interfaces/dashboard";
import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";

import "./index.scss";

const ChangePassForm: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      new_confirm_password: "",
    },
    validate: (values): FormikErrors<IChangePass> => {
      const errors: FormikErrors<IChangePass> = {};

      if (!values.new_password) {
        errors.new_password = "Required";
      } else if (values.new_password.length < 8) {
        errors.new_password = "Minimum eight characters";
      }
      if (!values.new_confirm_password) {
        errors.new_confirm_password = "Required";
      } else if (values.new_confirm_password !== values.new_password) {
        errors.new_confirm_password = "Passwords don't match ";
      }

      return errors;
    },
    onSubmit: (values): void => {
      dispatch(changePassword(values));
    },
  });
  return (
    <form className="pass-change-form" onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-24">
          <Input
            label="New password"
            className="input margin-15"
            id="current_password"
            name="current_password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.current_password}
            touched={formik.touched.current_password}
            placeholder="Current password"
            error={formik.errors.current_password}
          />
        </div>
        <div className="col-24">
          <Input
            label="New password"
            className="input margin-15"
            id="new_password"
            name="new_password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.new_password}
            touched={formik.touched.new_password}
            placeholder="New password"
            error={formik.errors.new_password}
          />
        </div>
        <div className="col-24">
          <Input
            label="Password confirmation"
            className="input margin-15"
            id="new_confirm_password"
            name="new_confirm_password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.new_confirm_password}
            placeholder="Password confirmation"
            error={formik.errors.new_confirm_password}
            touched={formik.touched.new_confirm_password}
          />
        </div>
      </div>

      <Button loading={auth?.loading} className="primary" type="submit">
        Save changes
      </Button>
    </form>
  );
};

export default ChangePassForm;
