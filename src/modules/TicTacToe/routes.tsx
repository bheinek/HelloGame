import { Route, Routes } from "react-router-dom";
import { CompletedGame, TicTacToe } from "./pages/_index";

export const TicTacToeRoutes = () => {
  return (
    <Routes>
      <Route element={<TicTacToe />} path="/" />
      <Route element={<CompletedGame />} path="/completed-game" />
    </Routes>
  );
};
