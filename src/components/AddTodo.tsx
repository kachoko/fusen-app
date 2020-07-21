import React, { useState } from "react";
// import styles from "../styles/Header.module.scss";

type AddTodoComponentProps = {
  onAdd: Function
}

const AddTodoComponent = (props: AddTodoComponentProps) => {
  const [todo, setTodo] = useState("");

  function addTodo() {
    console.log(todo);
    setTodo("");
    props.onAdd(todo);
  }

  return (
    <div>
      <input type="text" value={todo} onChange={(event: any) => { setTodo(event.target.value) }} />
      <button onClick={addTodo}>TODO追加</button>
    </div>
  );
}

export default AddTodoComponent;
