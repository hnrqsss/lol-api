import { Routes, Route } from "react-router-dom";
import { Match } from "./Match";
import { Home } from "./Pages/Home";

export function Router() {
    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="partida/:id" element={<Match />} />
      </Routes>
    )
}