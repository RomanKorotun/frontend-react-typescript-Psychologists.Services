import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ClipLoaderContainer } from "./Loader.styled";

export const Loader: FC = () => {
  return (
    <ClipLoaderContainer>
      <ClipLoader color="#26ca20" />
    </ClipLoaderContainer>
  );
};
