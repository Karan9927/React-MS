import "./App.css";
import Feedbacks from "./Components/Feedbacks";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Feedbacks />
      <Footer />
    </div>
  );
}

export default App;
