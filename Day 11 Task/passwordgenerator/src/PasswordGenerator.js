import React, { useState, useRef } from "react";
import LengthSlider from "./LengthSlider";
import "./App.css";
import { TfiReload } from "react-icons/tfi";
import { FaCopy } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { CgChevronLeftO } from "react-icons/cg";
import Checkbox from "@mui/material/Checkbox";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [copy, setCopy] = useState(false);
  const passwordInputRef = useRef(null);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?";

    let validChars = "";

    if (includeNumbers) {
      validChars += numberChars;
    }

    if (includeSpecialChars) {
      validChars += specialChars;
    }
    if (includeUpperCase) {
      validChars += uppercaseChars;
    }
    if (includeLowerCase) {
      validChars += lowercaseChars;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password === "") {
      alert("Generate Password");
    } else {
      passwordInputRef.current.select();
      document.execCommand("copy");
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  };
  const lengthHandler = (value) => {
    setLength(value);
  };
  return (
    <div className="m-auto">
      <div className="mb-20 text-center">
        <h1 className="text-white text-[42px]">Password Generator</h1>
      </div>
      <div className="p-8 m-auto glass w-max ">
        <div>
          <input
            className="text-white bg-transparent text-[36px]"
            type="text"
            value={password}
            ref={passwordInputRef}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="my-2 font-semibold">
            {length < 10 ? (
              <p className="text-red-600 ">Weak</p>
            ) : (
              <p className="text-green-400 ">Strong</p>
            )}
          </div>
          <div className="flex items-center gap-5 text-[20px]">
            <div>
              <button
                className=" hover:text-blue-500"
                onClick={generatePassword}
              >
                {password ? <TfiReload /> : <CgChevronLeftO />}
              </button>
            </div>
            <div>
              <button
                className=" hover:text-blue-500"
                onClick={copyToClipboard}
              >
                {copy ? <BiCheck /> : <FaCopy />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <label className="text-white text-[22px]">
              length: {length}
              <LengthSlider length={length} lengthHandler={lengthHandler} />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between text-white">
          <label>Include Uppercase (ABC)</label>
          <Checkbox
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="flex items-center justify-between text-white">
          <label>Include Lowercase (abc)</label>
          <Checkbox
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="flex items-center justify-between text-white">
          <label>Include Numbers (123)</label>
          <Checkbox
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="flex items-center justify-between text-white">
          <label>Include Special Characters (!@#)</label>
          <Checkbox
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
