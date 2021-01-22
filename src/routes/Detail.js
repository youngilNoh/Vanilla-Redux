import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Detail({ toDo, onClick }) {
	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>Created at: {toDo?.id}</h5>
			<button onClick={onClick}>DEL</button>
		</>
	);
}

function mapStateToProps(state, ownProps) {
	const {
		match: {
			params: { id },
		},
	} = ownProps;
	return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
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
