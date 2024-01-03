import "./App.css";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App mx-[170px] mt-[30px] mb-[84px] flex gap-10 relative">
      <Profile />
      <Menu />
    </div>
  );
}

export default App;
