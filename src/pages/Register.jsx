import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import check from "../assets/check_mark.png";
import { toast } from "react-toastify";

const initialValues = {
  first_name: "Ravi",
  last_name: "",
  password: "",
  confirm_password: "",
  mobile_number: "",
  email: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  mobile_number: Yup.string()
    .matches(
      /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
      {
        message: "Invalid number",
        excludeEmptyString: false,
      }
    )
    .required("Phone number required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user_token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (isSuccess) {
      return;
    }
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user_token, isError, message, navigate, dispatch, isSuccess]);

  const onSubmit = (values) => {
    const userData = {
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      scope: "",
      grant_type: "password",
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
      confirm_password: values.confirm_password,
      mobile_number: values.mobile_number,
      email: values.email,
      dob: "1994-01-16",
    };
    dispatch(register(userData));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.errors);
  if (isSuccess) {
    return (
      <>
        <div className="login-container">
          <div className="form-login ">
            <div className="has-text-centered">
              <img src={check} alt="" width={150} />
            </div>
            <div>
              <h1 className="is-size-4 has-text-centered has-text-weight-bold">
                Congratulations
              </h1>
            </div>
            <div className="has-text-centered">
              Your account has been Created Successfully
            </div>
            <div className="has-text-centered m-4">
              <button
                className="button is-success is-medium is-fullwidth"
                onClick={navigateHome}
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="login-container">
        <div className="field form-login-header" style={{ color: "white" }}>
          <h1 className="is-size-2">
            {" "}
            <Link to="/login" style={{ color: "white" }}>
              {"<"}{" "}
            </Link>{" "}
            Create Account
          </h1>
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
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="first_name"
                    {...formik.getFieldProps("first_name")}
                    placeholder="Enter first name"
                  />
                </div>
                {formik.errors.first_name && formik.touched.first_name ? (
                  <p className="help is-danger">{formik.errors.first_name}</p>
                ) : null}
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="last_name"
                    {...formik.getFieldProps("last_name")}
                    placeholder="Enter last name"
                  />
                </div>
                {formik.errors.last_name && formik.touched.last_name ? (
                  <p className="help is-danger">{formik.errors.last_name}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field is-expanded">
                <label className="label">Mobile Number</label>
                <div className="field has-addons">
                  <p className="control">
                    <a className="button is-static">+94</a>
                  </p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      name="mobile_number"
                      {...formik.getFieldProps("mobile_number")}
                      placeholder="Your phone number"
                    />
                  </p>
                </div>
                {formik.errors.mobile_number && formik.touched.mobile_number ? (
                  <p className="help is-danger">
                    {formik.errors.mobile_number}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Enter Email"
                name="email"
                {...formik.getFieldProps("email")}
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
                className="input"
                type="password"
                name="password"
                {...formik.getFieldProps("password")}
                placeholder="Enter password"
              />
            </div>
            {formik.errors.password && formik.touched.password ? (
              <p className="help is-danger">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="confirm_password"
                {...formik.getFieldProps("confirm_password")}
                placeholder="Enter password again"
              />
            </div>
            {formik.errors.confirm_password &&
            formik.touched.confirm_password ? (
              <p className="help is-danger">{formik.errors.confirm_password}</p>
            ) : null}
          </div>

          <div className="field">
            <p className="control">
              <button
                className="button is-success is-medium is-fullwidth"
                type="submit"
              >
                Create Account
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
