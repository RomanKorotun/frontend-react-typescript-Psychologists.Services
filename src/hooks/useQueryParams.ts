import { useMemo } from "react";

export const useQueryParams = (
  standard: string | null,
  name: string | null,
  price: string | null,
  popular: string | null
) => {
  return useMemo(() => {
    const newParams: URLSearchParams = new URLSearchParams();
    standard && newParams.set("standard", standard);
    name && newParams.set("name", name);
    price && newParams.set("price", price);
    popular && newParams.set("popular", popular);
    return newParams.toString();
  }, [standard, name, price, popular]);
};
