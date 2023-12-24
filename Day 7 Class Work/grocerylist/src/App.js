import { useEffect, useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";

function App() {
  const [cards, setCards] = useState([]);
  const [grocery, setGrocery] = useState("");
  const [message, setMessage] = useState("");

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

  const groceryHandler = (event) => {
    setGrocery(event.target.value);
  };

  const addToList = () => {
    if (grocery == "") {
      setMessage("❗Please Provide Value");
      setGrocery("");
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } else {
      const newItem = {
        id: cards.length + 1,
        item: grocery,
        isChecked: false,
      };
      setCards([...cards, newItem]);
      setGrocery("");
      setMessage("Item Added To The List");

      setTimeout(() => {
        setMessage("");
      }, 4000);
    }
  };

  const deleteHandler = (id) => {
    const updatedList = cards.filter((item) => item.id !== id);
    setCards(updatedList);
    setMessage("Item Deleted !");

    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  const checkboxHandler = (id) => {
    setCards((prevCards) =>
      prevCards.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  const cross = () => {
    setMessage("");
  };
  return (
    <div className="App">
      <div className="container">
        <p className="heading">Grocery Bud</p>
        <div className="input">
          <input onChange={groceryHandler} value={grocery} type="text" />
          <button onClick={addToList}>Add Item</button>
        </div>

        {cards.map((card) => (
          <div className="item-container" key={card.id}>
            <div className="item">
              <input
                type="checkbox"
                checked={card.isChecked}
                onChange={() => checkboxHandler(card.id)}
              />
              <p
                style={{
                  textDecoration: card.isChecked ? "line-through" : "none",
                }}
              >
                {card.item}
              </p>
            </div>
            <button className="delete" onClick={() => deleteHandler(card.id)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
      {message && (
        <div className="message">
          {message}
          <button className="cross" onClick={cross}>
            X
          </button>
          <div className="timer-line" />
        </div>
      )}
    </div>
  );
}

export default App;
