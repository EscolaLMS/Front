import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";
import { Spinner, Alert } from "reactstrap";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import catchErrors from "@/utils/catchErrors";
import baseUrl from "@/utils/baseUrl";

const RegisterForm = ({ user }) => {
  const { token } = parseCookies();
  const { addToast } = useToasts();

  const INIT_APPLY = {
    name: user.name,
    email: user.email,
    number: user.phone,
    subject: "Becaome A Teacher!",
    as_teacher_apply: true,
    as_teacher_req_desc: "",
  };

  const [apply, setApply] = React.useState(INIT_APPLY);
  const [initApply, setInitApply] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState("");
  const { register, handleSubmit, errors } = useForm();

  React.useEffect(() => {
    const isApply = Object.values(apply).every((el) => Boolean(el));
    isApply ? setDisabled(false) : setDisabled(true);
  }, [apply]);

  const handleChange = (e) => {
    // console.log(d.value)
    const { name, value } = e.target;
    setApply((prevState) => ({ ...prevState, [name]: value }));
    // console.log(apply);
  };

  const handleApply = async () => {
    // e.preventDefault()
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/v1/user/apply`;
      const payload = { ...apply };
      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      addToast(response.data, {
        appearance: "success",
      });

      setApply(INIT_APPLY);
      setInitApply(true);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  const isApplied =
    user &&
    user.as_teacher_apply === true &&
    user.as_teacher_confirmed === null;
  const isTeacher =
    user &&
    user.as_teacher_apply === true &&
    user.as_teacher_confirmed === true;
  const isCancelled =
    user &&
    user.as_teacher_apply === true &&
    user.as_teacher_confirmed === false;

  return (
    <div className="teacher-register-area ptb-100">
      <div className="container">
        <div className="teacher-register-box">
          <h2>Register to Become an Intructor</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>

          {isApplied && (
            <Alert color="info mt-15">
              Your application is pending now, you will get notice soon.
            </Alert>
          )}
          {isTeacher && (
            <Alert color="success mt-15">
              You already a teacher & create much exciting content.
            </Alert>
          )}
          {isCancelled && (
            <Alert color="success mt-15">
              You already applied & you got cancellation.
            </Alert>
          )}

          <form id="contactForm" onSubmit={handleSubmit(handleApply)}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={apply.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    value={apply.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Your phone number"
                    value={apply.number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    value={apply.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={5}
                    placeholder="Please tell us about your teaching profession"
                    className="form-control"
                    name={"as_teacher_req_desc"}
                    value={apply.as_teacher_req_desc}
                    onChange={handleChange}
                    ref={register({ required: true })}
                  />
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {errors.text && "Details is required."}
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                {!(initApply || isApplied || isTeacher || isCancelled) && (
                  <div className="text-right">
                    <button
                      disabled={disabled || loading}
                      type="submit"
                      className="default-btn"
                    >
                      Apply Now
                      {loading ? <Spinner color="success" /> : ""}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
