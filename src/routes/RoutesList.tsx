import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PrivateRoute } from "../components/PrivateRoute";

const HomePage = lazy(() => import("../page/HomePage"));
const PsychologistsPage = lazy(() => import("../page/PsychologistsPage"));
const PsychologistPage = lazy(() => import("../page/PsychologistPage"));
const PsychologistsFavoritePage = lazy(
  () => import("../page/PsychologistsFavoritePage")
);
const NotFoundPage = lazy(() => import("../page/NotFoundPage"));
const AppointmentsPage = lazy(() => import("../page/AppointmentsPage"));
const AppointmentPage = lazy(() => import("../page/AppointmentPage"));

export const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="psychologists" element={<PsychologistsPage />} />
        <Route path="psychologist/:id" element={<PsychologistPage />} />
        <Route
          path="favorite"
          element={
            <PrivateRoute
              redirectTo="/psychologists"
              page={<PsychologistsFavoritePage />}
            />
          }
        />
        <Route
          path="appointments"
          element={
            <PrivateRoute
              redirectTo="/psychologists"
              page={<AppointmentsPage />}
            />
          }
        />
        <Route
          path="appointments/:id"
          element={
            <PrivateRoute
              redirectTo="/psychologists"
              page={<AppointmentPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
