import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Ravi",
  email: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
});

function Login() {
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
                  formik.errors.name && formik.touched.name ? "is-danger" : ""
                } `}
                type="text"
                name="name"
                {...formik.getFieldProps("name")}
                placeholder="Enter username"
              />
            </div>
            {formik.errors.name && formik.touched.name ? (
              <p className="help is-danger">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={`input ${
                  formik.errors.email && formik.touched.email ? "is-danger" : ""
                } `}
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
            <p className="control">
              <button className="button is-success" type="submit">
                Login
              </button>
            </p>
            <div className="control">
              <h1 className="is-3" style={{ marginTop: 5 }}>
                Still Have No account?{" "}
                <b>
                  {" "}
                  <a href="/register" style={{ color: "#ff9900" }}>
                    SIGNUP
                  </a>{" "}
                </b>{" "}
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
