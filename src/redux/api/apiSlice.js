import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pcApi = createApi({
  reducerPath: "pc",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (category) => `/accessory?category=${category}`,
    }),

    getProductById: builder.query({
      query: (id) => `/accessory?id=${id}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery } = pcApi;
