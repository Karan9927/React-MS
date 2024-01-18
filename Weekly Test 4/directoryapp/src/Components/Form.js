import React from "react";

const Form = ({
  handleSubmit,
  nameRef,
  dobRef,
  aadharRef,
  mobileRef,
  ageRef,
  currentAge,
  ageHandler,
}) => {
  return (
    <div className="pb-2 my-2 text-center text-white bg-blue-500">
      <h2 className="text-xl font-semibold">
        Fill the form below for new entry
      </h2>
      <form className="border border-gray" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" required placeholder="Name" />
        <input
          ref={dobRef}
          onChange={ageHandler}
          type="date"
          required
          placeholder="dd-mm-yyyy"
        />
        <input
          ref={aadharRef}
          type="number"
          required
          min="100000000000"
          max="999999999999"
          placeholder="Aadhar Number"
        />
        <input
          ref={mobileRef}
          type="number"
          min="1000000000"
          max="9999999999"
          required
          placeholder="Mobile Number"
        />
        <input
          value={currentAge}
          ref={ageRef}
          readOnly
          type="number"
          placeholder="Age"
        />
        <input
          className="font-semibold bg-white cursor-pointer"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};

export default Form;
