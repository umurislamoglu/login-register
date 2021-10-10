import React from "react";

const Login = () => {
  const showErrorMessage = (errorStateName, errorMsgName, errorMsgText) => {
    document.getElementById(errorStateName).classList.add("errorState");
    document.getElementById(errorMsgName).innerText = errorMsgText;
    document.getElementById(errorMsgName).classList.add("errorDisplay");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    document.getElementById("loginEmail").classList.remove("errorState");
    document.getElementById("errorMsg").classList.remove("errorDisplay");
    document.getElementById("loginPassword").classList.remove("errorState");
    document.getElementById("errorMsg2").classList.remove("errorDisplay");

    let isValid = true;

    let loginEmailVal = document.getElementById("loginEmail").value;
    let loginPasswordVal = document.getElementById("loginPassword").value;

    if (loginEmailVal === "") {
      showErrorMessage("loginEmail", "errorMsg", "*Bu alan boş bırakılamaz");

      isValid = false;
    } else {
      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isValidEmail = emailPattern.test(String(loginEmailVal).toLowerCase());
      if (!isValidEmail) {
        showErrorMessage(
          "loginEmail",
          "errorMsg",
          "*Lütfen Email formatına uygun giriniz"
        );

        isValid = false;
      }
    }

    if (loginPasswordVal === "") {
      showErrorMessage(
        "loginPassword",
        "errorMsg2",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      let isValidPass = passwordPattern.test(String(loginPasswordVal));
      if (!isValidPass) {
        showErrorMessage(
          "loginPassword",
          "errorMsg2",
          "*En az 1 rakam, En az 1 büyük harf min 8 karakter"
        );

        isValid = false;
      }
    }

    return isValid;
  };

  const handleClick = () => {
    let seePassword = document.getElementById("loginPassword").type;
    if (seePassword === "password") {
      document.getElementById("loginPassword").type = "text";
    }
    if (seePassword === "text") {
      document.getElementById("loginPassword").type = "password";
    }
  };

  return (
    <div
      className="  d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className=" bg-white border border-gray rounded">
        <div className="px-5 py-4">
          <form className="p-3" id="login" onSubmit={handleSubmit}>
            <input
              id="loginEmail"
              name="loginEmail"
              type="text"
              className="form-control rounded-pill  p-2 bg-light "
              style={{ width: "400px" }}
              placeholder="E-mail Adresiniz"
            />
            <span id="errorMsg" className="errorMsg">
              *Bu alan boş bırakılamaz
            </span>

            <div className="d-flex flex-row align-items-center  ">
              <input
                id="loginPassword"
                name="loginPassword"
                type="password"
                className="form-control rounded-pill mt-4 mb-3 p-2 bg-light"
                style={{ width: "400px" }}
                placeholder="Şifreniz"
              />
              <i
                className="bi bi-eye fs-3 eyeImage"
                id="togglePassword"
                onClick={handleClick}
             
              ></i>
            </div>
            <span id="errorMsg2" className="errorMsg">
              *Bu alan boş bırakılamaz
            </span>

            <div className="d-flex flex-row justify-content-between mt-4">
              <p className="sifreText">Şifremi Unuttum</p>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" id="exampleCheck1">
                  Beni Hatırla
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn btn-primary rounded-pill px-5 py-2"
                type="submit"
              >
                GİRİŞ YAP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
