import React from "react";

const Register = () => {
  const handleValidation = () => {
    let isValid = true;

    let registerNameVal = document.getElementById("registerName").value;
    let registerSurnameVal = document.getElementById("registerSurname").value;
    let registerEmailVal = document.getElementById("registerEmail").value;
    let registerTelVal = document.getElementById("registerTel").value;
    let registerPasswordVal = document.getElementById("registerPassword").value;
    let registerPasswordCheckVal = document.getElementById(
      "registerPasswordCheck"
    ).value;
    let checkboxVal = document.getElementById("exampleCheck1").checked;

    if (registerNameVal === "") {
      isValid = false;
    }

    if (registerSurnameVal === "") {
      isValid = false;
    }

    if (registerEmailVal === "") {
      isValid = false;
    }

    if (registerTelVal === "") {
      isValid = false;
    }
    if (registerPasswordVal === "") {
      isValid = false;
    }

    if (registerPasswordCheckVal === "") {
      isValid = false;
    }

    if (registerPasswordCheckVal !== registerPasswordVal) {
      isValid = false;
    }
    if (!checkboxVal) {
      isValid = false;
    }

    if (isValid) {
      document.getElementById("submitBtn").classList.remove("disabled");
    } else {
      document.getElementById("submitBtn").classList.add("disabled");
    }
  };

  const handleClick = () => {
    let seePassword = document.getElementById("registerPassword").type;
    if (seePassword === "password") {
      document.getElementById("registerPassword").type = "text";
    }
    if (seePassword === "text") {
      document.getElementById("registerPassword").type = "password";
    }
  };

  const handleClickForCheck = () => {
    let seePassword = document.getElementById("registerPasswordCheck").type;
    if (seePassword === "password") {
      document.getElementById("registerPasswordCheck").type = "text";
    }
    if (seePassword === "text") {
      document.getElementById("registerPasswordCheck").type = "password";
    }
  };

  const showErrorMessage = (errorStateName, errorMsgName, errorMsgText) => {
    document.getElementById(errorStateName).classList.add("errorState");
    document.getElementById(errorMsgName).innerText = errorMsgText;
    document.getElementById(errorMsgName).classList.add("errorDisplay");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    document.getElementById("registerName").classList.remove("errorState");
    document.getElementById("registerSurname").classList.remove("errorState");
    document.getElementById("registerEmail").classList.remove("errorState");
    document.getElementById("registerTel").classList.remove("errorState");
    document.getElementById("registerPassword").classList.remove("errorState");
    document
      .getElementById("registerPasswordCheck")
      .classList.remove("errorState");

    document.getElementById("errorMsgName").classList.remove("errorDisplay");
    document.getElementById("errorMsgEmail").classList.remove("errorDisplay");
    document.getElementById("errorMsgTel").classList.remove("errorDisplay");
    document.getElementById("errorMsgPass1").classList.remove("errorDisplay");
    document.getElementById("errorMsgPass2").classList.remove("errorDisplay");

    let isValid = true;

    let registerNameVal = document.getElementById("registerName").value;
    let registerSurnameVal = document.getElementById("registerSurname").value;
    let registerEmailVal = document.getElementById("registerEmail").value;
    let registerTelVal = document.getElementById("registerTel").value;
    let registerPasswordVal = document.getElementById("registerPassword").value;
    let registerPasswordCheckVal = document.getElementById(
      "registerPasswordCheck"
    ).value;

    if (registerNameVal === "") {
      showErrorMessage(
        "registerName",
        "errorMsgName",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      let val = document.getElementById("registerName").value;
      if (val.length < 3 || val.length > 24) {
        showErrorMessage(
          "registerName",
          "errorMsgName",
          "*Lütfen 3 ile 24 karakter arasında giriniz"
        );

        isValid = false;
      }
    }

    if (registerSurnameVal === "") {
      showErrorMessage(
        "registerSurname",
        "errorMsgName",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      let val = document.getElementById("registerSurname").value;
      if (val.length < 3 || val.length > 24) {
        showErrorMessage(
          "registerSurname",
          "errorMsgName",
          "*Lütfen 3 ile 24 karakter arasında giriniz"
        );

        isValid = false;
      }
    }

    if (registerEmailVal === "") {
      showErrorMessage(
        "registerEmail",
        "errorMsgEmail",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isValidEmail = emailPattern.test(
        String(registerEmailVal).toLowerCase()
      );
      if (!isValidEmail) {
        showErrorMessage(
          "registerEmail",
          "errorMsgEmail",
          "*Lütfen Email formatına uygun giriniz"
        );

        isValid = false;
      }
    }

    if (registerTelVal === "") {
      showErrorMessage(
        "registerTel",
        "errorMsgTel",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      const telPattern = /^05(0[5-7]|[3-5]\d)\d{3}\d{4}$/gm;
      let isValidTel = telPattern.test(String(registerTelVal).toLowerCase());
      if (!isValidTel) {
        showErrorMessage(
          "registerTel",
          "errorMsgTel",
          "*Lütfen telefon formatına uygun giriniz"
        );

        isValid = false;
      }
    }

    if (registerPasswordVal === "") {
      showErrorMessage(
        "registerPassword",
        "errorMsgPass1",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      let isValidPass = passwordPattern.test(String(registerPasswordVal));
      if (!isValidPass) {
        showErrorMessage(
          "registerPassword",
          "errorMsgPass1",
          "*En az 1 rakam, En az 1 büyük harf min 8 karakter"
        );

        isValid = false;
      }
    }

    if (registerPasswordCheckVal === "") {
      showErrorMessage(
        "registerPasswordCheck",
        "errorMsgPass2",
        "*Bu alan boş bırakılamaz"
      );

      isValid = false;
    } else {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      let isValidPass = passwordPattern.test(String(registerPasswordCheckVal));
      if (!isValidPass) {
        showErrorMessage(
          "registerPasswordCheck",
          "errorMsgPass2",
          "*En az 1 rakam, En az 1 büyük harf min 8 karakter"
        );

        isValid = false;
      }
    }

    if (registerPasswordCheckVal !== registerPasswordVal) {
      showErrorMessage(
        "registerPasswordCheck",
        "errorMsgPass2",
        "*Parolalar uyumsuz"
      );
      showErrorMessage(
        "registerPassword",
        "errorMsgPass1",
        "*Parolalar uyumsuz"
      );

      isValid = false;
    }

    return isValid;
  };

  return (
    <div
      className="  d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className=" bg-white border border-gray rounded">
        <div className="px-5 py-4">
          <form className="p-3" onSubmit={handleSubmit}>
            <div className="d-flex flex-row justify-content-center">
              <input
                id="registerName"
                type="text"
                className="form-control rounded-pill p-2 bg-light mx-auto "
                style={{ width: "190px" }}
                placeholder="Adınız"
                onChange={handleValidation}
              />
              <input
                id="registerSurname"
                type="text"
                className="form-control rounded-pill p-2 bg-light mx-auto "
                style={{ width: "190px" }}
                placeholder="Soyadınız"
                onChange={handleValidation}
              />
            </div>
            <span id="errorMsgName" className="errorMsg ">
              *Bu alan boş bırakılamaz
            </span>

            <input
              id="registerEmail"
              type="text"
              className="form-control rounded-pill mt-4 p-2 bg-light "
              style={{ width: "400px" }}
              placeholder="E-mail Adresiniz"
              onChange={handleValidation}
            />
            <span id="errorMsgEmail" className="errorMsg  ">
              *Bu alan boş bırakılamaz
            </span>

            <input
              id="registerTel"
              type="tel"
              className="form-control rounded-pill mt-4 p-2 bg-light "
              style={{ width: "400px" }}
              placeholder="Telefon Numaranız : Örn 05551112233"
              onChange={handleValidation}
            />
            <span id="errorMsgTel" className="errorMsg ">
              *Bu alan boş bırakılamaz
            </span>

            <div className="d-flex flex-row align-items-center  ">
              <input
                id="registerPassword"
                type="password"
                className="form-control rounded-pill mt-3 p-2 bg-light "
                style={{ width: "400px" }}
                placeholder="Şifreniz"
                onChange={handleValidation}
              />

              <i
                className="bi bi-eye fs-3 eyeImage"
                id="togglePassword"
                onClick={handleClick}
              ></i>
            </div>
            <span id="errorMsgPass1" className="errorMsg ">
              *Bu alan boş bırakılamaz
            </span>

            <div className="d-flex flex-row align-items-center  ">
              <input
                id="registerPasswordCheck"
                type="password"
                className="form-control rounded-pill mt-3 p-2 bg-light "
                style={{ width: "400px" }}
                placeholder="Şifre Onayı"
                onChange={handleValidation}
              />
              <i
                className="bi bi-eye fs-3 eyeImage"
                id="togglePassword"
                onClick={handleClickForCheck}
               
              ></i>
            </div>
            <span id="errorMsgPass2" className="errorMsg ">
              *Bu alan boş bırakılamaz
            </span>

            <div className="mt-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={handleValidation}
              />
              <label
                className="form-check-label uyelikCheck"
                id="exampleCheck1"
              >
                <span className="uyelikKosul">Üyelik koşullarını</span> ve
                kişisel verilerimin korunmasını kabul ediyorum.
              </label>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button
                id="submitBtn"
                type="submit"
                className="btn btn-primary rounded-pill px-5 py-2 disabled"
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

export default Register;
