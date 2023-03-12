import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import {
  displayNameValidation,
  passwordRepeatValidaton,
  passwordValidation,
  usernameValidation,
} from "../config/validation";
import Input from "../components/input/Input";
import { useDispatch } from "react-redux";
import { DeleteAllCards } from "../redux/actions/CardActions";
function SignupPage(props) {
  const [form, setForm] = useState({
    username: "",
    displayName: "",
    password: "",
    passwordRepeat: "",
  });

  const { t } = props;
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm((o) => {
      return {
        ...o,
        [name]: value,
      };
    });
  };

  const onClickSignup = (event) => {
    event.preventDefault();
    dispatch(DeleteAllCards());
    localStorage.setItem("username", form.username);
    localStorage.setItem("password", form.password);
    navigate("/");
  };

  let isValidUsername = usernameValidation(form.username);
  let isValidDisplayName = displayNameValidation(form.displayName);
  let isValidPasswordRepeat = passwordRepeatValidaton(
    form.password,
    form.passwordRepeat
  );
  let isValidPassword = passwordValidation(form.password);
  let buttonDisabled =
    isValidDisplayName ||
    isValidUsername ||
    isValidPasswordRepeat ||
    isValidPassword;

  return (
    <div className="container" style={{ paddingTop: 50 }}>
      <Link to="/login" style={{ float: "right", marginTop: 5 }}>
        <ImCancelCircle className="fs-3 text-danger" />
      </Link>
      <h1 className="text-center">{t("Sign Up")} </h1>
      <form>
        <Input
          name="username"
          type="text"
          label={t("Username")}
          error={isValidUsername}
          onChange={onChange}
        />
        <Input
          name="displayName"
          type="text"
          label={t("Display Name")}
          error={isValidDisplayName}
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          label={t("Password")}
          error={isValidPassword}
          onChange={onChange}
        />
        <Input
          name="passwordRepeat"
          type="password"
          label={t("Password Repeat")}
          error={isValidPasswordRepeat}
          onChange={onChange}
        />
        <div class="form-group mb-5 mt-4 text-center">
          <button
            className="btn btn-secondary"
            disabled={buttonDisabled}
            onClick={(e) => onClickSignup(e)}
          >
            {t("Sign Up")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default withTranslation()(SignupPage);
