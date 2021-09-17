import React, { useContext } from "react";
import { Alert, Spinner } from "reactstrap";
import { EscolaLMSContext } from "../../escolalms/context";
import TempEmail from "../TempEmail";

const INITIAL_USER = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const RegisterForm = () => {
  const { register } = useContext(EscolaLMSContext);

  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<API.DefaultResponseError>();
  const [success, setSuccess] = React.useState<boolean>(false);

  const onDismiss = () => setError(null);

  React.useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      register({ ...user })
        .then(() => setSuccess(true))
        .catch((error) => {
          setError(error.data);
        });
    } catch (error) {
      setError(error.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <TempEmail />
      {success && (
        <Alert color="success">
          Account registered successfully. Please check your{" "}
          <code>{user.email}</code> for validation link.
        </Alert>
      )}
      {error && (
        <Alert color="danger" isOpen={error ? true : false} toggle={onDismiss}>
          {error.message}
          {error.errors && (
            <ul>
              {Object.entries(error.errors).map((err) => (
                <li key={err[0]}>
                  <strong>{err[0]}</strong> {err[1]}
                </li>
              ))}
            </ul>
          )}
        </Alert>
      )}

      {!success && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="password_confirmation"
              value={user.password_confirmation}
              onChange={handleChange}
            />
          </div>

          <p className="description">
            The password should be at least eight characters long. To make it
            stronger, use upper and lower case letters, numbers, and symbols
            like ! " ? $ % ^ & )
          </p>

          <button type="submit" disabled={disabled}>
            Register
            {loading ? <Spinner color="success" /> : ""}
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
