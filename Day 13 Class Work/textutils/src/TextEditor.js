import React from "react";

const TextEditor = ({ state, dispatch }) => {
  const handleChange = (e) => {
    dispatch({ type: "UpdatedContent", payload: e.target.value });
  };
  const clickHandler = () => {
    dispatch({ type: "UPPERCASE", payload: state.content });
  };
  const copy = () => {
    dispatch({ type: "COPY", payload: state.content });
    navigator.clipboard.writeText(state.content);
  };
  return (
    <div className="mb-[48px]">
      <h2 className="text-[22px] font-bold my-2">Enter Your Text Here:</h2>
      <textarea
        rows={8}
        value={state.content}
        onChange={handleChange}
        className="border-2 w-full rounded-md py-[6px] px-[12px] focus:outline-blue-400"
      ></textarea>
      <div className="flex gap-2 my-2 font-medium">
        <button
          onClick={clickHandler}
          className=" p-2 px-3 rounded-[4px] bg-[#0D6EFD] text-white"
        >
          Convert Uppercase
        </button>
        <button
          onClick={() =>
            dispatch({ type: "LOWERCASE", payload: state.content })
          }
          className=" p-2 px-3 rounded-[4px] bg-[#0D6EFD] text-white"
        >
          Convert Lowercase
        </button>
        <button
          className=" p-2 px-3 rounded-[4px] bg-[#DC3545] text-white"
          onClick={() => dispatch({ type: "CLEAR", payload: state.content })}
        >
          Clear Text
        </button>
        <button
          className=" p-2 px-3 rounded-[4px] bg-[#198754] text-white"
          onClick={copy}
        >
          Copy To Clipboard
        </button>

        <button
          className=" p-2 px-3 rounded-[4px] bg-[#0D6EFD] text-white"
          onClick={() => dispatch({ type: "SPACE", payload: state.content })}
        >
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
