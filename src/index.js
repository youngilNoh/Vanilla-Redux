// import { createStore } from "redux";

/*************** Counter Vanilla*/
// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
// 	switch (action.type) {
// 		case ADD:
// 			return count + 1;
// 		case MINUS:
// 			return count - 1;
// 		default:
// 			return count;
// 	}
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
// 	number.innerText = countStore.getState();
// };
// countStore.subscribe(onChange);

// const handleAdd = () => {
// 	countStore.dispatch({ type: ADD });
// };

// const handleMinus = () => {
// 	countStore.dispatch({ type: MINUS });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
/*************** End Counter Vanilla*/

/***************** TO DO Vanilla*/
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
// 	return { type: ADD_TODO, text };
// };

// const deleteToDo = (id) => {
// 	return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case ADD_TODO:
// 			const newItem = { text: action.text, id: Date.now() };
// 			return [newItem, ...state];
// 		case DELETE_TODO:
// 			return state.filter((todo) => todo.id !== action.id);
// 		default:
// 			return state;
// 	}
// };
// const store = createStore(reducer);

// const dispatchAddToDo = (text) => {
// 	store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = (e) => {
// 	const id = parseInt(e.target.parentNode.id);
// 	store.dispatch(deleteToDo(id));
// };

// const paintToDos = () => {
// 	const toDos = store.getState();
// 	ul.innerHTML = "";
// 	toDos.forEach((toDo) => {
// 		const li = document.createElement("li");
// 		const btn = document.createElement("button");
// 		btn.innerText = "Delete";
// 		btn.addEventListener("click", dispatchDeleteToDo);
// 		li.id = toDo.id;
// 		li.innerText = toDo.text + " ";
// 		li.append(btn);
// 		ul.appendChild(li);
// 	});
// };

// store.subscribe(paintToDos);

// const onSubmit = (e) => {
// 	e.preventDefault();
// 	const toDo = input.value;
// 	input.value = "";
// 	dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);
/***************** End TO DO Vanilla*/

/*********** React Redux */
import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "./components/App";
import { store, persistor } from "./todoRedux/todo.store";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
/*********** End React Redux */
