import React from "react";

function Footer() {
  return (
    <footer className="footer  is-justify-content-space-between is-align-items-center py-5 px-6">
      <div className="content has-text-centered mb-0">
        <p>
          <strong>Version 1.0</strong>
        </p>
      </div>
      <div className="content has-text-centered">
        <p>
          <a href="#" style={{ margin: 10 }}>
            About
          </a>
          <a href="#" style={{ margin: 10 }}>
            Privacy
          </a>
          <a href="#" style={{ margin: 10 }}>
            Terms
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
