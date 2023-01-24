import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const britingAPI = createApi({
  reducerPath: "britingAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2000/" }),
  endpoints: (builder) => ({}),
});

export const { useGetBrithingDataQuery } = britingAPI;
