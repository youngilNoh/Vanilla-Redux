import { createAction } from "@reduxjs/toolkit";

// export const actionType = {
// 	ADD: "ADD",
// 	DELETE: "DELETE",
// };

// const addToDo = (text) => ({
// 	type: actionType.ADD,
// 	text,
// });

// const deleteToDo = (id) => ({
// 	type: actionType.DELETE,
// 	id,
// });

/* use createAction */
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const actionCreators = {
	addToDo,
	deleteToDo,
};

export default actionCreators;
