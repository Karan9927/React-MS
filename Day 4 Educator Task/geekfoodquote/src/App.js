import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Quotes from "./Components/Quotes";
import Author from "./quotes.json";

function App() {
  return (
    <div>
      <Navbar />
      <Quotes quote={Author} />
      <Footer />
    </div>
  );
}

export default App;
