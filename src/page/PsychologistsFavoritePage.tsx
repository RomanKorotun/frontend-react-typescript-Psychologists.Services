import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { psychologistsFavorite } from "../redux/api";
import { Container, Section } from "../GlobaStyles";
import { PsychologistList } from "../components/PsychologistList/PsychologistList";
import { usePsychologists } from "../hooks/usePsychologists";
import {
  resetPsychologistsFavoriteState,
  setClearFavoriteItem,
  setFilter,
  setPageFavorite,
} from "../redux/psychologists/psychologistsSlice";
import { Loader } from "../components/Loader/Loader";
import { PaginationButtons } from "../components/Pagination/Pagination";
import { Filters } from "../components/Filters/Filters";
import { useFilters } from "../hooks/useFilters";
import { useQueryParams } from "../hooks/useQueryParams";
import { LinkFavorite, MessageInfo } from "../components/MessageInfo";

const PsychologistsFavoritePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    favoriteItems,
    pageFavorite,
    pagesFavoriteQuantity,
    loading,
    clearFavoriteItem,
  } = usePsychologists();
  const { standard, name, price, popular } = useFilters();

  const isFirstRender = useRef(true);

  const params = useQueryParams(standard, name, price, popular);

  useEffect(() => {
    if (!isFirstRender.current) {
      dispatch(psychologistsFavorite({ pageFavorite, params }));
    }
  }, [dispatch, pageFavorite, params]);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(psychologistsFavorite({ pageFavorite, params }));
      isFirstRender.current = false;
    }
  }, [dispatch, pageFavorite, params]);

  useEffect(() => {
    if (
      favoriteItems.length === 0 &&
      pageFavorite === pagesFavoriteQuantity &&
      pageFavorite > 1
    ) {
      dispatch(
        psychologistsFavorite({ pageFavorite: pageFavorite - 1, params })
      );
      dispatch(setPageFavorite({ page: pageFavorite - 1 }));
    }
  }, [dispatch, favoriteItems, pageFavorite, pagesFavoriteQuantity, params]);

  useEffect(() => {
    if (favoriteItems.length === 2 || favoriteItems.length === 1) {
      if (pageFavorite < pagesFavoriteQuantity && clearFavoriteItem) {
        dispatch(psychologistsFavorite({ pageFavorite, params }));
        dispatch(setPageFavorite({ page: pageFavorite }));
        dispatch(setClearFavoriteItem());
      }
    }
  }, [
    dispatch,
    favoriteItems,
    pageFavorite,
    pagesFavoriteQuantity,
    clearFavoriteItem,
    params,
  ]);

  useEffect(() => {
    return () => {
      dispatch(resetPsychologistsFavoriteState());
      dispatch(setFilter({ filter: "Default" }));
    };
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {favoriteItems.length === 0 && !loading && (
          <MessageInfo>
            Please go to the&nbsp;
            <LinkFavorite to="/psychologists">psychologists page</LinkFavorite>
            &nbsp; to add a psychologist to the selected category.
          </MessageInfo>
        )}
        {favoriteItems.length > 0 && <Filters />}
        {favoriteItems.length > 0 && <PsychologistList items={favoriteItems} />}
        {favoriteItems.length > 0 && <PaginationButtons />}
      </Container>
    </Section>
  );
};

export default PsychologistsFavoritePage;
