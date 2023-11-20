import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TicTacToeRoutes } from "../modules/TicTacToe/routes";
import { About, Home, PageNotFound } from "../pages/_index";
import { ROUTES } from "./routes";
import { PongRoutes } from "../modules/Pong/routes";

export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={ROUTES.home} />
        <Route element={<About />} path={ROUTES.about} />
        <Route element={<PageNotFound />} path={ROUTES.notFound} />

        {/* Games */}
        <Route
          element={<TicTacToeRoutes />}
          path={`${ROUTES.gamesRoutes.ticTacToe}/*`}
        />
        <Route element={<PongRoutes />} path={`${ROUTES.gamesRoutes.pong}/*`} />
      </Routes>
    </BrowserRouter>
  );
};
