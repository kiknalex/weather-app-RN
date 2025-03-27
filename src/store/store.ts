import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api-slice";
import { listenerMiddleware } from "./listener-middleware";
interface NewsState {
	data: undefined | any;
}

const newsDataReducer = (
	state: NewsState = { data: undefined },
	action: Action
) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export const store = configureStore({
	reducer: {
		newsData: newsDataReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.prepend(listenerMiddleware.middleware)
			.concat(apiSlice.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
