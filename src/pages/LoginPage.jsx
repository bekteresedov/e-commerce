import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import Input from "../components/input/Input";
import { useDispatch } from "react-redux";
import { DeleteAllCards } from "../redux/actions/CardActions";

function LoginPage(props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();
  let [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setError("");
    setForm((o) => {
      return {
        ...o,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(DeleteAllCards());
    if (
      localStorage.getItem("username") === form.username &&
      localStorage.getItem("password") === form.password
    ) {
      setError("");
      navigate("/");
    }
    setError("The password you have entered is incorrect.");
  };

  const { t } = props;

  const dispatch = useDispatch();

  return (
    <div className="container m-auto" style={{ paddingTop: 100 }}>
      <Link to="/" style={{ float: "right", marginTop: 5 }}>
        <ImCancelCircle className="fs-3 text-danger" />
      </Link>
      <h1 className="text-center">{t("Login")} </h1>
      <form>
        <Input
          name="username"
          type="text"
          label={t("Username")}
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          label={t("Password")}
          onChange={onChange}
        />
        {error && (
          <div className="alert alert-danger mt-2" role="alert">
            {t(error)}
          </div>
        )}
        <div className="mt-2 ms-2 text-warning">
          {t("Forgot your password?")}
        </div>
        <div class="form-group mb-4 mt-4 text-center">
          <button onClick={(e) => login(e)} className="btn btn-secondary">
            {t("Login")}
          </button>
        </div>

        <div class="form-group mb-5 mt-2 text-center">
          <Link to="/signup" className="btn btn-dark text-white">
            {t("Create new account")}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default withTranslation()(LoginPage);
