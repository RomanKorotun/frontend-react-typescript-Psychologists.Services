import { useSelector } from "react-redux";
import {
  errorSelector,
  loadingSelector,
  favoriteItemsSelector,
  itemsSelector,
  pageFavoriteSelector,
  pageSelector,
  pagesQuantitySelector,
  pagesFavoriteQuantitySelector,
  clearFavoriteItemSelector,
  filterSelector,
} from "../redux/psychologists/psychologistsSelecrors";

export const usePsychologists = () => {
  const items = useSelector(itemsSelector);
  const favoriteItems = useSelector(favoriteItemsSelector);
  const clearFavoriteItem = useSelector(clearFavoriteItemSelector);
  const filter = useSelector(filterSelector);
  const pagesQuantity = useSelector(pagesQuantitySelector);
  const pagesFavoriteQuantity = useSelector(pagesFavoriteQuantitySelector);
  const page = useSelector(pageSelector);
  const pageFavorite = useSelector(pageFavoriteSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  return {
    items,
    favoriteItems,
    clearFavoriteItem,
    filter,
    pagesQuantity,
    pagesFavoriteQuantity,
    page,
    pageFavorite,
    loading,
    error,
  };
};
