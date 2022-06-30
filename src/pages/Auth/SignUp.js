import axios from "axios";
import React, { useReducer, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useDocumentTitle, useToast } from "../../hooks";
import { signupReducer } from "../../reducers";
import "./Auth.css";

export function SignUp() {
  useDocumentTitle("SignUp");

  const { dispatch: authDispatch } = useAuth();

  const [state, dispatch] = useReducer(signupReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, password, confirmPassword } = state;

  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      const { createdUser: user, encodedToken } = response.data;
      authDispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", encodedToken);
      if (location.state !== null) {
        navigate(location.state?.from?.pathname);
      } else {
        navigate("/");
      }
      showToast("success","Account Created and Logged In!");
    } catch (error) {
      showToast("error",error.response.data.errors[0]);
      setError("Sign up failed.");
    }
  };

  return (
    <div className="section__login">
      <div className="form-box">
        <div className="button-box">
          <h3 className="toggle-btn">SIGN UP</h3>
        </div>
        <form className="input-group" onSubmit={handleFormSubmit}>
          <label htmlFor="firstname" className="password-label">
            First Name
          </label>
          <input
            type="text"
            className="input-fields"
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>
              dispatch({ type: "FIRST_NAME", payload: e.target.value })
            }
            required
          />
          <label htmlFor="lastname" className="password-label">
            Last Name
          </label>
          <input
            type="text"
            className="input-fields"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) =>
              dispatch({ type: "LAST_NAME", payload: e.target.value })
            }
            required
          />
          <label htmlFor="mail" className="password-label">
            Email Address
          </label>
          <input
            type="email"
            className="input-fields"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) =>
              dispatch({ type: "EMAIL", payload: e.target.value })
            }
            required
          />
          <label htmlFor="pwd" className="password-label">
            Password
          </label>
          <div className="visibility">
            <input
              type={showPassword ? "text" : "password"}
              className="visibility-fields"
              placeholder="Enter Password"
              value={password}
              maxLength="20"
              minLength="6"
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
              autoComplete="off"
              required
            />
            {
              <span
                className="visibility-icon"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            }
          </div>

          <label htmlFor="pwd" className="password-label">
            Confirm Password
          </label>
          <div className="visibility">
            <input
              type={confirmPassVisible ? "text" : "password"}
              className="visibility-fields"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              maxLength="20"
              minLength="6"
              onChange={(e) =>
                dispatch({
                  type: "CONFIRM_PASSWORD",
                  payload: e.target.value,
                })
              }
              autoComplete="off"
              required
            />
            {
              <span
                className="visibility-icon"
                onClick={() =>
                  setConfirmPassVisible(
                    (confirmPassVisible) => !confirmPassVisible
                  )
                }
              >
                {confirmPassVisible ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            }
          </div>

          <div className="checkbox-block">
            <input type="checkbox" className="check-box" required />
            <span className="check-psswd">
              Sign up for emails to get updates
            </span>
          </div>
          <button
            type="submit"
            className="submit-loginbtns"
            disabled={password !== confirmPassword}
          >
            REGISTER
          </button>

          {error && (
            <div className="login-error-msg">
              <i className="fa-solid fa-square-xmark"></i>
              <p>{error}</p>
            </div>
          )}

          {password !== confirmPassword && (
            <div className="login-error-msg">
              <i className="fa-solid fa-square-xmark"></i>
              <p>Passwords don't match</p>
            </div>
          )}

          <div className="input-account">
            Already registered?
            <Link to="/login" className="primary-account">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
