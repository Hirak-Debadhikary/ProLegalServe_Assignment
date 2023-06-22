import "./App.css";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
