import { useRef, useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("person")) || []
  );
  const [showForm, setShowForm] = useState(false);
  const nameRef = useRef(null);
  const dobRef = useRef(null);
  const aadharRef = useRef(null);
  const mobileRef = useRef(null);
  const ageRef = useRef(null);
  const idCounterRef = useRef(1);
  const [calculatedAge, setCalculatedAge] = useState("");

  const calculateAge = (age) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const ageOfperson = new Date(age);
    const yearofperson = ageOfperson.getFullYear();
    const currentAge = currentYear - yearofperson;
    setCalculatedAge(currentAge);
  };

  const ageHandler = (e) => {
    const age = e.target.value;
    calculateAge(age);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: idCounterRef.current++,
      name: nameRef.current.value,
      dob: dobRef.current.value,
      aadhar: aadharRef.current.value,
      mobile: mobileRef.current.value,
      age: calculatedAge,
    };
    console.log(newData);
    const updated = [...data, newData];
    setData(updated);
    nameRef.current.value = "";
    dobRef.current.value = "";
    aadharRef.current.value = "";
    mobileRef.current.value = "";
    ageRef.current.value = "";

    localStorage.setItem("person", JSON.stringify(updated));
    setShowForm(false);
  };
  const deleteHandler = (entryID) => {
    const updated = data.filter((entry) => entry.id !== entryID);
    setData(updated);
    localStorage.setItem("person", JSON.stringify(updated));
  };
  return (
    <div className="px-16">
      <div className="border border-black h-[540px]">
        <p className="mb-[32px] p-3 w-[280px] text-center font-semibold border-b border-r border-black">
          Add New Person
        </p>
        <div className="w-[95%] mx-auto">
          <table className="w-full">
            <thead>
              <tr className="font-normal text-white bg-blue-500 ">
                <th>Name</th>
                <th>Date Of Birth</th>
                <th>Aadhar Number</th>
                <th>Mobile Number</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr className="text-center" key={entry.id}>
                  <td>{entry.name}</td>
                  <td>{entry.dob}</td>
                  <td>{entry.aadhar}</td>
                  <td>{entry.mobile}</td>
                  <td>{entry.age}</td>
                  <td>
                    <button
                      className="text-blue-500 underline"
                      onClick={() => deleteHandler(entry.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showForm && (
            <Form
              currentAge={calculatedAge}
              ageHandler={ageHandler}
              handleSubmit={handleSubmit}
              nameRef={nameRef}
              dobRef={dobRef}
              aadharRef={aadharRef}
              mobileRef={mobileRef}
              ageRef={ageRef}
            />
          )}
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="absolute p-2 px-6 text-white bg-blue-500 rounded-sm right-20 bottom-10"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
