import React from "react";
import { connect } from "react-redux";
import actionCreators from "../todoRedux/todo.action";

function Detail({ toDo, onClick }) {
	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>Created at: {toDo?.id}</h5>
			<button onClick={onClick}>DEL</button>
		</>
	);
}

function mapStateToProps({ list }, ownProps) {
	const {
		match: {
			params: { id },
		},
	} = ownProps;
	return { toDo: list.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
	const {
		match: {
			params: { id },
		},
	} = ownProps;
	return {
		onClick: () => {
			dispatch(actionCreators.deleteToDo(parseInt(id)));
			window.history.back();
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
