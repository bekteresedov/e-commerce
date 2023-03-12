import React from "react";
import { withTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
function ProfilePage(props) {
  const { t } = props;
  const navigate = useNavigate();

  const removeProfile = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{paddingTop:50}}>
      <div style={{ minHeight: "80vh" }}>
        <div class="card mt-4 ms-5" style={{ width: "18rem" }}>
          <CgProfile
            style={{ fontSize: 250, color: " #6096B4", margin: "auto" }}
          />
        </div>
        <div className="ms-5 mt-4 mb-5">
          <h2 class="card-text ">
            {t("Username")}:{localStorage.getItem("username")}
          </h2>
          <button
            onClick={() => removeProfile()}
            className="btn btn-danger px-5 mt-5"
          >
            {t("Delete Profile")}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withTranslation()(ProfilePage);
