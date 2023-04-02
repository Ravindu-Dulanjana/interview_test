import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  first_name: "Ravi",
  last_name: "",
  password: "",
  confirm_password: "",
  mobile_number: "",
  email: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("First is required"),
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.errors);
  return (
    <>
      <div className="login-container">
        <div className="field form-login-header" style={{ color: "white" }}>
          <h1 className="is-size-2">
            {" "}
            <a href="/login" style={{ color: "white" }}>
              {"<"}{" "}
            </a>{" "}
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
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success" type="submit">
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
