import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <p>Page Not Found</p>
        <Link
          to={"/"}
          onClick={() => {
            setTimeout(() => {
              window.location.reload();
            });
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
