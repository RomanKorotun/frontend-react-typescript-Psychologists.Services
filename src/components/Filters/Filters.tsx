import { FC, KeyboardEvent, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import {
  Autocomplete as MuiAutocomplete,
  TextField as MuiTextField,
} from "@mui/material";
import { FiltersWrapper, Title } from "./Filters.styled";
import { filterOptions } from "../../helpers/filterOptions";
import styled from "styled-components";
import { useFilters } from "../../hooks/useFilters";
import { AppDispatch } from "../../redux/store";
import {
  setFilter,
  setPage,
  setPageFavorite,
} from "../../redux/psychologists/psychologistsSlice";
import { usePsychologists } from "../../hooks/usePsychologists";
import { getFilterKeyValue } from "../../helpers/getFilterKeyValue";

interface IAutocompleteProps {
  options: string[];
  value: string | null;
  onChange: (event: SyntheticEvent, newValue: string | null) => void;
}

const Autocomplete = styled(MuiAutocomplete)<IAutocompleteProps>(
  ({ theme }) => ({
    width: "290px",
    ".MuiOutlinedInput-root": {
      backgroundColor: theme.colors.accentColor,
      color: "#fbfbfb",
      padding: "16px !important",
      borderRadius: "14px",
    },
    ".MuiAutocomplete-popupIndicator": {
      color: "#fbfbfb",
    },
  })
);

const TextField = styled(MuiTextField)({
  "& .MuiInputBase-input": {
    cursor: "pointer",
    padding: "0 !important",
  },
});

export const Filters: FC = () => {
  const { filter } = usePsychologists();
  const dispatch = useDispatch<AppDispatch>();
  const { changeFilterUrl } = useFilters();

  const handleChange = (_: SyntheticEvent, newValue: string | null) => {
    if (newValue) {
      const { key, value } = getFilterKeyValue(newValue);
      dispatch(setPage({ page: 1 }));
      dispatch(setPageFavorite({ page: 1 }));
      dispatch(setFilter({ filter: newValue }));
      changeFilterUrl(key, value);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.key !== "ArrowDown" &&
      event.key !== "ArrowUp" &&
      event.key !== "Enter"
    ) {
      event.preventDefault();
    }
  };

  return (
    <FiltersWrapper>
      <Title>Filters</Title>
      <Autocomplete
        options={filterOptions}
        getOptionLabel={(option: unknown) =>
          typeof option === "string" ? option : ""
        }
        renderInput={(params) => <TextField {...params} />}
        value={filter}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        clearIcon={null}
      />
    </FiltersWrapper>
  );
};
