import React from "react";
import { useReducer, useState } from "react";
import Navbar from "../Navbar";
import TextEditor from "../../TextEditor";

const Home = () => {
  const [copy, setCopy] = useState(false);

  const intialState = {
    content: "",
  };

  const reduceFunc = (state, action) => {
    switch (action.type) {
      case "UPPERCASE":
        return { ...state, content: action.payload.toUpperCase() };
      case "UpdatedContent":
        return { ...state, content: action.payload };
      case "LOWERCASE":
        return { ...state, content: action.payload.toLowerCase() };
      case "SPACE":
        return {
          ...state,
          content: action.payload.replace(/\s+/g, " ").trim(),
        };
      case "COPY":
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 2000);
        return { ...state, content: action.payload };
      case "CLEAR":
        return { ...state, content: "" };
      default:
        console.log("Unexpected Handler");
        break;
    }
  };
  const [state, dispatch] = useReducer(reduceFunc, intialState);
  const words = state.content.split(/\s+/).filter((word) => word !== "").length;
  const readingTime = 0.008 * words;

  return (
    <div>
      <Navbar />
      {copy && (
        <div className="bg-[#bceadc] p-4 flex absolute w-full">
          <p>
            <span className="font-bold">Success </span>: Copied the Text :{" "}
            {state.content}
          </p>
        </div>
      )}

      <div className="px-[100px] py-[48px]">
        <h1 className="text-[40px] font-semibold text-center">
          TextUtils - Word Counter, Character Counter, Remove Extra Space
        </h1>
        <TextEditor state={state} dispatch={dispatch} />
        <div>
          <h1 className="mb-[8px] text-4xl font-semibold">
            Summary Of Your Text
          </h1>
          <p className="mb-[16px]">
            Number of words :{" "}
            {state.content.split(/\s+/).filter((word) => word !== "").length}
          </p>
          <p className="mb-[16px]">
            Number of Characters : {state.content.length}
          </p>
        </div>
        <p className="mb-[16px]">Reading Time : {readingTime}</p>
      </div>
      <div className=" px-[100px]">
        <h2 className="text-center text-[28px] font-semibold mb-[8px]">
          Preview Document
        </h2>
        <textarea
          value={state.content}
          className="border-2 focus:outline-none w-full rounded-md py-[6px] px-[12px] mb-[48px]"
          readOnly
          rows={8}
        >
          {state.content}
        </textarea>
      </div>
    </div>
  );
};

export default Home;
