import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://newsapi.org/v2",
		prepareHeaders: (headers) => {
			return headers.set("Authorization", process.env.EXPO_PUBLIC_API_KEY);
		},
	}),
	endpoints: (builder) => ({
		getNews: builder.query({
			query: () => "/everything?q=bitcoin",
		}),
	}),
});

export const { useGetNewsQuery } = apiSlice;
