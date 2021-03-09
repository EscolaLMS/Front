import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../forms/AuthForm";
import SocialButtons from "../../components/SocialButtons";

const LoginPage: React.FC = (): ReactElement => {
  return (
    <AuthLayout>
      <div className="auth-page__form-wrapper">
        <h2>Registration</h2>
        <AuthForm isRegister={true} />
        <span className="auth-page__or">or</span>
        <SocialButtons isRegister />
        <p className="auth-page__go-to-login">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default LoginPage;
