import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pcApi = createApi({
  reducerPath: "pc",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pc-builder-server-oaoc.onrender.com" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
     
      query: (category) => `/accessoryByCategory?category=${category}`,
    }),

    getProductById: builder.query({
      query: (id) => `/accessory?id=${id}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery } = pcApi;
