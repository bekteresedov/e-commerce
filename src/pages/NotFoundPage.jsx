import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

function NotFoundPage(props) {
  const { t, errorMessage } = props;
  return (
    <div className="h-75" style={{ minHeight: "60vh" }}>
      <Link to={"/"} className="fs-1 text-danger">
          <ImCancelCircle />
      </Link>
      <div className="text-center mt-5">
        <span className="fs-1 fw-bold text-danger">{t(errorMessage)}!!</span>
      </div>
    </div>
  );
}

export default withTranslation()(NotFoundPage);
