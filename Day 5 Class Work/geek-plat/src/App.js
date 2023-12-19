import React, { useState, useEffect } from "react";
import Card from "./Card";

const App = () => {
  const [cards, setCards] = useState([]);
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  // Save data to localStorage whenever cards change
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const hourHandler = (e) => {
    setHour(e.target.value);
  };

  const addCard = () => {
    if (+hour === 0 || subject === "") {
      alert("Enter valid Subject Or Duration for the class !");
      setSubject("");
      setHour("");
    } else if (hour < 0) {
      alert("Enter a valid class duration !");
      setSubject("");
      setHour("");
    } else {
      const newCard = {
        id: cards.length + 1,
        subject: subject,
        duration: hour,
      };

      setCards([...cards, newCard]);
      setSubject("");
      setHour("");
    }
  };

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] border border-black app">
      <div className="flex items-center justify-center gap-8 mb-[40px]">
        <input
          className="p-2 border-2 border-gray-300 rounded-md "
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={subjectHandler}
        />
        <input
          className="p-2 w-[90px] border-2 border-gray-300 rounded-md "
          type="number"
          placeholder="Hours"
          value={hour}
          onChange={hourHandler}
        />
        <button
          className="bg-[#3B82F6] text-white p-2 rounded-md hover:bg-[#1362e1]"
          onClick={addCard}
        >
          Add Card
        </button>
      </div>
      {cards.map((card) => (
        <Card
          key={card.id}
          subject={card.subject}
          duration={card.duration}
          onDelete={() => deleteCard(card.id)}
        />
      ))}
    </div>
  );
};

export default App;
