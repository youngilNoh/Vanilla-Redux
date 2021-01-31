import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../todoRedux/todo.reducer";

function Home({ toDos, addToDo }) {
	const [text, setText] = useState("");
	function onChange(e) {
		setText(e.target.value);
	}
	function onSubmit(e) {
		e.preventDefault();
		addToDo(text);
		setText("");
	}
	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button type="submit">Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<ToDo {...toDo} key={toDo.id} />
				))}
			</ul>
		</>
	);
}

function mapStateToProps({ list }) {
	return { toDos: list };
}

function mapDispatchToProps(dispatch) {
	return {
		addToDo: (text) => dispatch(add(text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
