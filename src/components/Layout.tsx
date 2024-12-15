import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
