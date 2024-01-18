import React, { useRef, useState } from "react";

const Retrieve = () => {
  const serachRef = useRef(null);
  const userData = JSON.parse(localStorage.getItem("person")) || [];
  const [foundData, setFoundData] = useState();

  const handleSearch = () => {
    const searched = serachRef.current.value;
    const found = userData.filter((person) => person.aadhar === searched);
    setFoundData(found);
  };
  return (
    <div className="px-16">
      <div className="border border-black h-[540px]">
        <p className="p-3 mb-[32px] w-[280px] text-center font-semibold border-b border-r border-black">
          Retrieve Information
        </p>
        <div className="flex">
          <input
            ref={serachRef}
            className="p-2 w-[500px] ml-5 border border-gray-600 rounded-sm"
            type="number"
            min="100000000000"
            max="999999999999"
            placeholder="Enter Aadhar Number"
          />
          <button
            onClick={handleSearch}
            className="p-1 px-8 ml-4 text-white bg-blue-500 rounded-sm hover:bg-blue-600 "
          >
            Find
          </button>
        </div>
        <div>
          {foundData ? (
            <>
              <div className=" mt-4 w-[95%] mx-auto">
                <table className="w-full">
                  <thead>
                    <tr className="font-normal text-white bg-blue-500 ">
                      <th>Name</th>
                      <th>Date Of Birth</th>
                      <th>Aadhar Number</th>
                      <th>Mobile Number</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foundData.map((person) => (
                      <tr className="text-center" key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.dob}</td>
                        <td>{person.aadhar}</td>
                        <td>{person.mobile}</td>
                        <td>{person.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <h2 className="my-4 text-3xl font-semibold text-center">No data</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Retrieve;
