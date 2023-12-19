import "./App.css";
import Cards from "./Components/Cards";
import movies from "./movies.json";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "52px",
          color: "white",
          paddingTop: "20px",
        }}
      >
        Movies
      </h1>
      <Cards movies={movies} />
    </div>
  );
}

export default App;
