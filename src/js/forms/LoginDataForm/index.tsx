import React, { ReactElement, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { changeEmail } from "../../redux/auth/actions";

import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";
import { useFormik, FormikErrors } from "formik";
import { ILoginData } from "../../interfaces/dashboard";

import { Input } from "../../components/FormElements/Inputs";
import Button from "../../components/FormElements/Button/Button";
import Modal from "../../components/Modal";
import ChangePassForm from "./../ChangePassForm";

import "./index.scss";

const LoginDataForm: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  const { email } = auth.user;
  const formik = useFormik({
    initialValues: {
      email: email,
    },
    validate: (values): FormikErrors<ILoginData> => {
      const errors: FormikErrors<ILoginData> = {};
      if (!values.email) {
        errors.email = "Required";
      }

      return errors;
    },
    onSubmit: (values: ILoginData): void => {
      dispatch(changeEmail(values));
    },
  });

  useEffect(() => {
    if (auth.passwordChanged && showModal) {
      setShowModal(false);
    }
  }, [auth]);

  return (
    <>
      <Modal
        isOpen={showModal}
        close={() => setShowModal(false)}
        withHeader
        title="Change password"
      >
        <ChangePassForm />
      </Modal>
      <form className="login-data-form" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <Input
              label="E-mail"
              className="input margin-15"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </div>
          <div className="col-lg-6">
            <div className="input margin-15">
              <label>Password</label>
              <Button
                className="transparent"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Wonna change?
              </Button>
            </div>
          </div>
          <div className="col-lg-6 button-wrapper">
            <Button
              disabled={formik.values.email === email}
              loading={auth.loading}
              type="submit"
              className="primary"
            >
              Save changes
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginDataForm;
