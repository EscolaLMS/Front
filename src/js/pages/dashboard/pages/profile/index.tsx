import React, { ReactElement } from "react";

import UserLayout from "../../../../layouts/UserLayout";
import CategoriesList from "../../../../components/CategoriesList";
import MyProfileForm from "../../../../forms/MyProfileForm";
import LoginDataForm from "../../../../forms/LoginDataForm";
import Settings from "../../../../components/Settings";
import "./index.scss";

const MyProfile: React.FC = (): ReactElement => {
  return (
    <UserLayout title="My profile">
      <section className="profile-box">
        <h3>Preferences</h3>
        <p className="description">
          Areas that interest you, on this basis we will prepare appropriate
          content:
        </p>
        <CategoriesList edit={true} />
      </section>
      <section className="profile-box">
        <h3>Login data</h3>
        <LoginDataForm />
      </section>
      <section className="profile-box profile-box--notification">
        <h3>Notifications</h3>
        <Settings />
      </section>
      <section className="profile-box">
        <h3>Personal data</h3>
        <MyProfileForm />
      </section>
    </UserLayout>
  );
};

export default MyProfile;
