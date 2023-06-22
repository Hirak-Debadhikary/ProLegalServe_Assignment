import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home/>
    </div>
  );
}

export default App;
