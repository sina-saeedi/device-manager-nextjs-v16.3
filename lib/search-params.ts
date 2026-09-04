import {createSearchParamsCache, parseAsString} from "nuqs/server";

export const searchParams = {
  status: parseAsString.withDefault(""),
  q: parseAsString.withDefault("")
};

export const searchParamsCache = createSearchParamsCache(searchParams);
