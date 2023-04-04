import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import add from "../assets/add.png";
import EditUser from "./EditUser";
import { useNavigate } from "react-router-dom";
import {
  getUser,
  reset,
  logout,
  uploadImage,
} from "../features/auth/authSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user_token, isLoading, isError, isSuccess, message, user } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (user_token) {
      dispatch(getUser());
    }
  }, []);

  useEffect(() => {
    if (!user_token) {
      navigate("/login");
    }
    if (isSuccess) {
      setShowEdit(() => false);
    }
    dispatch(reset());
  }, [user_token, isError, message, navigate, dispatch, isSuccess]);

  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    setShowEdit((pre) => !pre);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleImageFile = (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("profile_image", e.target.files[0]);
      dispatch(uploadImage(formData));
    }
  };
  if (showEdit) {
    return <EditUser />;
  }
  return (
    <>
      <div className="container is-max-desktop my-6">
        <div className="has-text-right">
          {user && (
            <button className="button is-success mx-3" onClick={handleClick}>
              Edit
            </button>
          )}

          <button className="button is-danger mr-3 " onClick={handleLogOut}>
            Logout
          </button>
        </div>
        <section className="section ">
          <div className="is-flex is-justify-content-space-between is-align-items-center">
            <div>
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={
                    user && user.profile_image
                      ? user.profile_image.resource
                      : "https://bulma.io/images/placeholders/128x128.png"
                  }
                  style={{ width: 128, maxHeight: 128, objectFit: "cover" }}
                />
              </figure>
              <div
                className="has-text-right"
                style={{
                  marginTop: -25,
                  zIndex: 10,
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <label htmlFor="image-file">
                  <img
                    className=""
                    src={add}
                    width={40}
                    style={{
                      padding: 5,
                      background: "white",
                      borderRadius: "50%",
                    }}
                  />
                </label>

                <input
                  id="image-file"
                  type="file"
                  name="file"
                  style={{ display: "none" }}
                  onChange={handleImageFile}
                />
              </div>
            </div>

            <div>
              <h1 className="title is-size-6-mobile is-size-1-tablet">
                {user && user.full_name}
              </h1>
            </div>
          </div>
          <div className="mx-6-touch my-6">
            <div className="columns is-multiline is-mobile">
              <div className="column">E Mail Address</div>
              <div className="column has-text-right">{user && user.email}</div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column">Name</div>
              <div className="column has-text-right">
                {user && user.full_name}
              </div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column">Gender</div>
              <div className="column has-text-right">
                {user && user.gender ? user.gender : "Other"}
              </div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column">Date-of-Birth</div>
              <div className="column has-text-right">{user && user.dob}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
