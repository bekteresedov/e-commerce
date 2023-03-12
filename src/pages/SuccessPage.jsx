import React from "react";
import { withTranslation } from "react-i18next";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function SuccessPage(props) {
  const { t } = props;

  let navigate = useNavigate("");

  const onCancel = () => {
    navigate("/");
  };

  return (
    <div className="container pt-5" style={{ minHeight: "70vh" }}>
      <div className="fs-1 mb-5 text-danger" style={{ cursor: "pointer" }}>
        <ImCancelCircle onClick={() => onCancel()} />
      </div>
      <div className="text-center mt-5 text-dark">
        <h1>{t("Congrats")} !!</h1>
        <h1>{t("Order completed successfully")}</h1>
      </div>
    </div>
  );
}

export default withTranslation()(SuccessPage);
