import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { useAuth } from "../../hooks/useAuth";
import { AppDispatch } from "../../redux/store";
import { usePsychologists } from "../../hooks/usePsychologists";
import { CustomStack } from "./Pagination.styled";
import {
  setPage,
  setPageFavorite,
} from "../../redux/psychologists/psychologistsSlice";

export const PaginationButtons: FC = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const {
    pagesQuantity,
    pagesFavoriteQuantity,
    favoriteItems,
    page,
    pageFavorite,
  } = usePsychologists();

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    if (isLoggedIn && favoriteItems.length > 0) {
      dispatch(setPageFavorite({ page }));
    } else {
      dispatch(setPage({ page }));
    }
  };

  const count =
    pagesQuantity > 1
      ? pagesQuantity
      : pageFavorite > 1
      ? pagesFavoriteQuantity
      : 1;

  const currentPage = page > 1 ? page : pageFavorite > 1 ? pageFavorite : 1;

  return (
    <CustomStack>
      <Pagination
        count={count}
        page={currentPage}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </CustomStack>
  );
};
