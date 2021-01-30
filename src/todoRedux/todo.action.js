export const actionType = {
	ADD: "ADD",
	DELETE: "DELETE",
};

const addToDo = (text) => ({
	type: actionType.ADD,
	text,
});

const deleteToDo = (id) => ({
	type: actionType.DELETE,
	id,
});

const actionCreators = {
	addToDo,
	deleteToDo,
};

export default actionCreators;
