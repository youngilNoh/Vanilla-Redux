import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE } from "redux-persist";
import reducer from "./todo.reducer";

// export const store = createStore(reducer);
export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});
export const persistor = persistStore(store);
