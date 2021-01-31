import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import actionCreators from "./todo.action";

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
		case actionCreators.addToDo.type:
			return { list: [{ text: action.payload, id: Date.now() }, ...list] };
		case actionCreators.deleteToDo.type:
			return { list: list.filter((toDo) => toDo.id !== action.payload) };
		default:
			return state;
	}
};

// export default reducer;
export default persistReducer(persistConfig, reducer);
