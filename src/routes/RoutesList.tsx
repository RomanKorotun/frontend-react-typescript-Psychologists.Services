import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PrivateRoute } from "../components/PrivateRoute";

const HomePage = lazy(() => import("../page/HomePage"));
const PsychologistsPage = lazy(() => import("../page/PsychologistsPage"));
const PsychologistsFavoritePage = lazy(
  () => import("../page/PsychologistsFavoritePage")
);
const NotFoundPage = lazy(() => import("../page/NotFoundPage"));

export const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="psychologists" element={<PsychologistsPage />} />
        <Route
          path="favorite"
          element={
            <PrivateRoute
              redirectTo="/psychologists"
              page={<PsychologistsFavoritePage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
