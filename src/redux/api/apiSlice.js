import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pcApi = createApi({
  reducerPath: "pc",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProcessor: builder.query({
      query: () => `/processor`,
    }),

    getMotherboard: builder.query({
      query: () => `/motherboard`,
    }),

    getRam: builder.query({
      query: () => `/ram`,
    }),
    getPowerSupply: builder.query({
      query: () => `/powerSupply`,
    }),
    getStorage: builder.query({
      query: () => `/storage`,
    }),

    getMonitor: builder.query({
      query: () => `/monitor`,
    }),
    getOthers: builder.query({
      query: () => `/others`,
    }),

    // getNewsById: builder.query({
    //   query: (id) => `/news/${id.newsDetailPage}`,
    // }),
  }),
});

export const {
  useGetMonitorQuery,
  useGetMotherboardQuery,
  useGetOthersQuery,
  useGetPowerSupplyQuery,
  useGetProcessorQuery,
  useGetRamQuery,
  useGetStorageQuery,
  use,
} = pcApi;
