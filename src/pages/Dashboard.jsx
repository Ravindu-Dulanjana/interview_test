import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";

function Dashboard() {
  useEffect(() => {}, []);

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
            <div class="columns is-multiline is-mobile">
              <div class="column">E Mail Address</div>
              <div class="column has-text-right">krdulanjana@gmail.com</div>
            </div>
            <div class="columns is-multiline is-mobile">
              <div class="column">Name</div>
              <div class="column has-text-right">Ravindu Dulanjana</div>
            </div>
            <div class="columns is-multiline is-mobile">
              <div class="column">Gender</div>
              <div class="column has-text-right">Male</div>
            </div>
            <div class="columns is-multiline is-mobile">
              <div class="column">Date-of-Birth</div>
              <div class="column has-text-right">1994-09-20</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
