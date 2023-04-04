import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user_token, isLoading, isError, isSuccess, message, user } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [user_token, isError, message, navigate, dispatch, isSuccess]);

  const initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    dob: user.dob,
    gender: user.gender ? user.gender : "other",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),

    dob: Yup.date().required("Date is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const onSubmit = (values) => {
    const userData = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      dob: values.dob,
      gender: values.gender,
    };
    dispatch(updateUserData(userData));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <div className="edit-container">
        <div
          className="field form-login-header"
          style={{ textAlign: "center" }}
        >
          <h1 className="is-size-2">Edit Profile</h1>
        </div>
        <form action="" className="form-login" onSubmit={formik.handleSubmit}>
          <div className="field">
            <h1
              className="nav-logo title is-4 mb-0"
              style={{ textAlign: "center" }}
            ></h1>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter First Name"
                    name="first_name"
                    {...formik.getFieldProps("first_name")}
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
                    placeholder="Enter Last Name"
                    name="last_name"
                    {...formik.getFieldProps("last_name")}
                  />
                </div>
                {formik.errors.last_name && formik.touched.last_name ? (
                  <p className="help is-danger">{formik.errors.last_name}</p>
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
            <label className="label">Date of Birth</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="1994-09-20"
                name="dob"
                {...formik.getFieldProps("dob")}
              />
            </div>
            {formik.errors.dob && formik.touched.dob ? (
              <p className="help is-danger">{formik.errors.dob}</p>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={formik.handleChange}
                  value="male"
                  checked={formik.values.gender == "male"}
                  hidden
                />
                <label
                  htmlFor="male"
                  className={`radio-btn ${
                    formik.values.gender == "male" ? "active" : ""
                  }`}
                >
                  Male
                </label>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={formik.handleChange}
                  value="female"
                  checked={formik.values.gender == "female"}
                  hidden
                />
                <label
                  htmlFor="female"
                  className={`radio-btn ${
                    formik.values.gender == "female" ? "active" : ""
                  }`}
                >
                  Female
                </label>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  onChange={formik.handleChange}
                  value="other"
                  checked={formik.values.gender == "other"}
                  hidden
                />
                <label
                  htmlFor="other"
                  className={`radio-btn ${
                    formik.values.gender == "other" ? "active" : ""
                  }`}
                >
                  Other
                </label>
              </label>
            </div>
            {formik.errors.gender && formik.touched.gender ? (
              <p className="help is-danger">{formik.errors.gender}</p>
            ) : null}
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success" type="submit">
                Update Profile Details
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;
