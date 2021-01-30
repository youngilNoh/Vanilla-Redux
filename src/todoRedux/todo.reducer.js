import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { actionType } from "./todo.action";

const persistConfig = {
	key: "root",
	storage,
};

const initialState = {
	list: [],
};

const reducer = (state = initialState, action) => {
	const { list } = state;
	switch (action.type) {
		case actionType.ADD:
			return { list: [{ text: action.text, id: Date.now() }, ...list] };
		case actionType.DELETE:
			return { list: list.filter((toDo) => toDo.id !== action.id) };
		default:
			return state;
	}
};

// export default reducer;
export default persistReducer(persistConfig, reducer);
