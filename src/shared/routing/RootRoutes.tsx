import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, PageNotFound } from "../pages";
import { ROUTES } from "./routes";

export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.notFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
