import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Game from "./components/Game";
import GameCenter from "./components/GameCenter";
import Game2 from "./components/Game2";
import Game3 from "./components/Game3";
import Game4 from "./components/Game4";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<GameCenter />} />
        <Route path="/game1" element={<Game />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
