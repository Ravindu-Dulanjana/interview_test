import React from "react";

function EditUser() {
  return (
    <>
      <div className="edit-container">
        <div
          className="field form-login-header"
          style={{ textAlign: "center" }}
        >
          <h1 className="is-size-2">Edit Profile</h1>
        </div>
        <form action="" className="form-login">
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
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter username"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Enter Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Birth</label>
            <div className="control">
              <input className="input" type="text" placeholder="Enter Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <label className="radio">
                <input type="radio" name="gender" id="male" hidden />
                <label htmlFor="male" className="radio-btn active">
                  Male
                </label>
              </label>
              <label className="radio">
                <input type="radio" name="gender" id="female" hidden />
                <label htmlFor="female" className="radio-btn">
                  Female
                </label>
              </label>
              <label className="radio">
                <input type="radio" name="gender" id="other" hidden />
                <label htmlFor="other" className="radio-btn">
                  Other
                </label>
              </label>
            </div>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success">
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
