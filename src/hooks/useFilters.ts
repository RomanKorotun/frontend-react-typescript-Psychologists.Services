import { useSearchParams } from "react-router-dom";

export const useFilters = () => {
  const [params, setParams] = useSearchParams();
  const standard = params.get("standard");
  const name = params.get("name");
  const price = params.get("price");
  const popular = params.get("popular");

  const changeFilterUrl = (key: string, value: string) => {
    params.delete("standard");
    params.delete("name");
    params.delete("price");
    params.delete("popular");
    if (value) {
      params.set(key, value);
    }
    setParams(params);
  };

  const resetFilterUrl = () => {
    params.delete("standard");
    params.delete("name");
    params.delete("price");
    params.delete("popular");
    setParams(params);
  };

  return { standard, name, price, popular, changeFilterUrl, resetFilterUrl };
};
