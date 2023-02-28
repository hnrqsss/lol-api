import App from "./App";
import { Routes, Route } from "react-router-dom";
import { Match } from "./Match";

export function Router() {
    return(
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="partida/:id" element={<Match />} />
      </Routes>
    )
}