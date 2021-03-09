import React, { ReactElement, useMemo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { updateProfile, getMe } from "../../redux/auth/actions";

import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";
import { IMyProfileForm, ProfileFormKeys } from "../../interfaces/dashboard";

import { useFormik, FormikErrors } from "formik";

import { Input } from "../../components/FormElements/Inputs";
import AvatarUploader from "../../components/FormElements/AvatarUploader";
import Select, { IOption } from "../../components/FormElements/Select";
import Button from "../../components/FormElements/Button/Button";

import "./index.scss";

const GENDER_OPTIONS: IOption[] = [
  { label: "male", value: 1 },
  { label: "female", value: 2 },
];

const MyProfileForm: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  const {
    first_name,
    last_name,
    age,
    gender,
    country,
    city,
    postcode,
    email,
    street,
    phone,
  } = auth.user;
  const formik = useFormik({
    initialValues: {
      first_name: first_name || "",
      last_name: last_name || "",
      age: age,
      gender: gender,
      country: country || "",
      city: city || "",
      postcode: postcode || "",
      street: street || "",
      email: email,
      phone: phone || "",
    },
    validate: (values): FormikErrors<IMyProfileForm> => {
      const errors: FormikErrors<IMyProfileForm> = {};
      if (!values.first_name) {
        errors.first_name = "Required";
      }
      if (!values.last_name) {
        errors.last_name = "Required";
      }
      if (!values.age) {
        errors.age = "Required x";
      } else if (values.age < 1) {
        errors.age = "Invalid age";
      }

      if (!values.gender) {
        errors.gender = "Required";
      }
      return errors;
    },
    onSubmit: (values: IMyProfileForm): void => {
      dispatch(updateProfile(values));
    },
  });

  const isActive = useMemo(() => {
    return (Object.keys(formik.values) as ProfileFormKeys[]).some(
      (key: ProfileFormKeys) => {
        return formik.values[key] !== formik.initialValues[key];
      }
    );
  }, [formik]);

  useEffect(() => {
    if (auth.profileUpdated) {
      dispatch(getMe());
    }
  }, [auth]);

  return (
    <form className="profile-form" onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-24">
          <AvatarUploader label="Profile image" />
        </div>
        <div className="col-lg-12">
          <Input
            label="First name"
            className="input margin-15"
            id="first_name"
            name="first_name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            error={formik.errors.first_name}
            touched={formik.touched.first_name}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="Second name"
            className="input margin-15"
            id="last_name"
            name="last_name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            error={formik.errors.last_name}
            touched={formik.touched.last_name}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="Age"
            className="input margin-15"
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
            error={formik.errors.age}
            touched={formik.touched.age}
          />
        </div>
        <div className="col-lg-12">
          <Select
            loading={false}
            className="form-field"
            data={GENDER_OPTIONS}
            label="Gender"
            selected={formik.values.gender?.toString() || 1}
            onSelect={(option) => formik.setFieldValue("gender", option.value)}
            error={formik.errors.gender}
            touched={formik.touched.gender}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="Country"
            className="input margin-15"
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.country}
            error={formik.errors.country}
            touched={formik.touched.country}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="City"
            className="input margin-15"
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.errors.city}
            touched={formik.touched.city}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="Street name, number"
            className="input margin-15"
            id="street"
            name="street"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.street}
            error={formik.errors.street}
            touched={formik.touched.street}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="Postcode"
            className="input margin-15"
            id="postcode"
            name="postcode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.postcode}
            error={formik.errors.postcode}
            touched={formik.touched.postcode}
          />
        </div>
        <div className="col-lg-12">
          <Input
            label="Phone"
            className="input margin-15"
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
            touched={formik.touched.phone}
          />
        </div>
        <div className="col-lg-24 text-right margin-top-30">
          <Button
            disabled={!isActive}
            loading={auth.loading}
            type="submit"
            className="primary"
          >
            Save changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default MyProfileForm;
