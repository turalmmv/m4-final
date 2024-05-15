import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; 
import Header from "./components/Headers.jsx";
import Watched from "./components/Watched.jsx";
import Watchlist from "./components/Watchlist.jsx";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
