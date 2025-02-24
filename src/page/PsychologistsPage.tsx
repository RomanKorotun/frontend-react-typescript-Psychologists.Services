import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  psychologistsForLoggedInUser,
  psychologistsFotNotLoggedInUser,
} from "../redux/api";
import { Container, Section } from "../GlobaStyles";
import { PsychologistList } from "../components/PsychologistList/PsychologistList";
import { usePsychologists } from "../hooks/usePsychologists";
import {
  resetPsychologistsState,
  setFilter,
} from "../redux/psychologists/psychologistsSlice";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "../components/Loader/Loader";
import { PaginationButtons } from "../components/Pagination/Pagination";
import { Filters } from "../components/Filters/Filters";
import { useFilters } from "../hooks/useFilters";
import { useQueryParams } from "../hooks/useQueryParams";

const PsychologistsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, loading: loadingAuth } = useAuth();
  const { items, loading, page } = usePsychologists();
  const { standard, name, price, popular } = useFilters();

  const isFirstNotLoginRender = useRef(true);
  const isFirstLoginRender = useRef(true);

  const params = useQueryParams(standard, name, price, popular);

  useEffect(() => {
    if (isLoggedIn && !isFirstLoginRender.current) {
      dispatch(psychologistsForLoggedInUser({ page, params }));
    }
  }, [dispatch, isLoggedIn, params, page]);

  useEffect(() => {
    if (!isLoggedIn && !loadingAuth) {
      dispatch(psychologistsFotNotLoggedInUser({ page, params }));
      isFirstNotLoginRender.current = false;
    }
  }, [dispatch, page, isLoggedIn, loadingAuth, params]);

  useEffect(() => {
    if (isLoggedIn && !loadingAuth && isFirstLoginRender.current) {
      dispatch(psychologistsForLoggedInUser({ page }));
      isFirstLoginRender.current = false;
    }
  }, [dispatch, page, isLoggedIn, loadingAuth]);

  useEffect(() => {
    return () => {
      dispatch(resetPsychologistsState());
      dispatch(setFilter({ filter: "Default" }));
    };
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {items.length > 0 && <Filters />}
        {items.length > 0 && <PsychologistList items={items} />}
        {items.length > 0 && <PaginationButtons />}
      </Container>
    </Section>
  );
};

export default PsychologistsPage;
