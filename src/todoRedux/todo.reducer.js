import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const initialState = {
	list: [],
};

const toDos = createSlice({
	name: "toDosReducer",
	initialState,
	reducers: {
		add: (state, action) => {
			state.list.unshift({ text: action.payload, id: Date.now() });
		},
		remove: (state, action) => {
			return { list: state.list.filter((toDo) => toDo.id !== action.payload) };
		},
	},
});

export const { add, remove } = toDos.actions;

// export default reducer;
export default persistReducer(persistConfig, toDos.reducer);
