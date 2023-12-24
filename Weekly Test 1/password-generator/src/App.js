import React, { useState } from "react";
import "./App.css";
import copy from "./icons8-copy.gif";
import { FaCopy } from "react-icons/fa";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);

  const lengthHandler = (event) => {
    setPasswordLength(event.target.value);
  };

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=<>?";

    let characters = "";
    if (includeUppercase) characters += uppercaseChars;
    if (includeLowercase) characters += lowercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = password;
    if (password.length === 0) {
      alert("Password field is empty,nothing to copy!");
    } else {
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      document.body.removeChild(textField);
      alert("Password Copied");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Password Generator</h1>
      <div className="password">
        <div className="pass">{password}</div>
        <button className="copy" onClick={copyToClipboard}>
          <FaCopy />
        </button>
      </div>
      <div className="length-container">
        <p>
          Select Password length<strong>(**8-50 characters**)</strong>
        </p>
        <input
          className="length"
          type="number"
          onChange={lengthHandler}
          value={passwordLength}
        />
      </div>
      <div className="checkbox-container">
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>
      </div>
      <button className="generate" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
