import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const TelAuth = () => {
  const countryCode = "+38";
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [validForm, setValidForm] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const authWithPhone = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setValidForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyPhoneCode = (e) => {
    let code = e.target.value;

    setVerifyCode(code);
    if (code.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(code)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/");
        })
        .catch((err) => {});
    }
  };
  return (
    <div className="container-my">
      <form onSubmit={authWithPhone}>
        <h1>Sign In With Phone Number</h1>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
            id="phoneInput"
          />
          <div id="phoneNumberHelp" className="form-text">
            Please enter youre phone number
          </div>
        </div>
        {validForm === true ? (
          <>
            <div className="mb-3">
              <label htmlFor="verifycode">OTP</label>
              <input
                type="number"
                value={verifyCode}
                onChange={verifyPhoneCode}
                className="form-control"
                id="verifycode"
              />
              <div id="otpHelp" className="form-text">
                Please enter the one time pin sent to youre phone
              </div>
            </div>
          </>
        ) : null}
        {validForm === false ? (
          <button type="submit" className="btn btn-primary">
            Request Code
          </button>
        ) : null}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
};

export default TelAuth;
