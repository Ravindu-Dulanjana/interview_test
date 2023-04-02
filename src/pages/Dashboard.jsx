import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import Login from "./Login";
import EditUser from "./EditUser";

function Dashboard() {
  const [showEdit, setShowEdit] = useState(true);
  if (showEdit) {
    return <EditUser />;
  }
  return (
    <>
      <div className="container is-max-desktop my-6">
        <section className="section ">
          <div className="is-flex is-justify-content-space-between is-align-items-center">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
            <div>
              <h1 className="title is-size-6-mobile is-size-1-tablet">
                Ravindu Dulanjana
              </h1>
            </div>
          </div>
          <div className="mx-6-touch my-6">
            <div className="columns is-multiline is-mobile">
              <div className="column">E Mail Address</div>
              <div className="column has-text-right">krdulanjana@gmail.com</div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column">Name</div>
              <div className="column has-text-right">Ravindu Dulanjana</div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column">Gender</div>
              <div className="column has-text-right">Male</div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column">Date-of-Birth</div>
              <div className="column has-text-right">1994-09-20</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
