import { filterOptions } from "./filterOptions";

export const getFilterKeyValue = (newValue: string | null) => {
  switch (newValue) {
    case filterOptions[0]:
      return { key: "standard", value: "all" };
    case filterOptions[1]:
      return { key: "name", value: "asc" };
    case filterOptions[2]:
      return { key: "name", value: "desc" };
    case filterOptions[3]:
      return { key: "price", value: "desc" };
    case filterOptions[4]:
      return { key: "price", value: "asc" };
    case filterOptions[5]:
      return { key: "popular", value: "desc" };
    case filterOptions[6]:
      return { key: "popular", value: "asc" };
    default:
      return { key: "", value: "" };
  }
};
