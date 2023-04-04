import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user_token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user_token) {
      navigate("/");
    }
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user_token, isError, message, navigate, dispatch, isSuccess]);

  const initialValues = {
    email: "Ravi@gmail.com",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    const userData = {
      username: values.email,
      password: values.password,
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      scope: "",
      grant_type: "password",
    };
    dispatch(login(userData));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="login-container">
        <div className="field" style={{ color: "white", textAlign: "center" }}>
          <h1 className="is-size-3">Welcome Back</h1>
          <h1>Login to your account</h1>
        </div>
        <form action="" className="form-login" onSubmit={formik.handleSubmit}>
          <div className="field">
            <h1
              className="nav-logo title is-4 mb-0"
              style={{ textAlign: "center" }}
            >
              ABC COMPANY
            </h1>
          </div>
          <div className="field">
            <label className="label">User Name</label>
            <div className="control">
              <input
                className={`input ${
                  formik.errors.email && formik.touched.email ? "is-danger" : ""
                } `}
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
                placeholder="Enter username"
              />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <p className="help is-danger">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className={`input ${
                  formik.errors.password && formik.touched.password
                    ? "is-danger"
                    : ""
                } `}
                type="password"
                placeholder="Enter password"
                name="password"
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.errors.password && formik.touched.password ? (
              <p className="help is-danger">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="field">
            <p className="control">
              <button
                className="button is-success is-medium is-fullwidth"
                type="submit"
              >
                Login
              </button>
            </p>
            <div className="control">
              <h1 className="is-3" style={{ marginTop: 5 }}>
                Still Have No account?{" "}
                <Link to="/register" style={{ color: "#ff9900" }}>
                  <b>SIGNUP </b>
                </Link>{" "}
                Now
              </h1>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
