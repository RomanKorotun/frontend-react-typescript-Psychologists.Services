import { AuthNav } from "../AuthNav/AuthNav";
import { NavMenu } from "../NavMenu/NavMenu";
import { FC } from "react";
import { Logo } from "../Logo/Logo";

export const DesctopHeader: FC = () => {
  return (
    <>
      <Logo />
      <NavMenu />
      <AuthNav />
    </>
  );
};
