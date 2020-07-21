import React, { useEffect, useState } from 'react';
import HeaderComponent from './components/Header';
import styles from "./App.module.scss";
import AddTodoComponent from './components/AddTodo';
import SmallFusenComponent from './components/SmallFusen';
import { getTodosFromLocalStorage, saveTodoToLocalStorage, clearTodosFromStorage } from './controllers/Storage';

function App() {

  const [todos, setTodos]: any = useState([]);

  useEffect(() => {
    setTodos(getTodosFromLocalStorage());
  }, [setTodos]);

  function renderTodo() {
    if (todos.length > 0) {
      const lists = todos.map((item: string, index: number) => {
        return <SmallFusenComponent key={index} text={item} index={index} onDelete={deleteTodo} />
      });
      return lists;
    }
    return null;
  }

  function addTodos(todo: string) {
    const _todos = todos.concat();
    _todos.push(todo);
    setTodos(_todos);
    saveTodoToLocalStorage(_todos);
  }

  function deleteTodo(idx: number) {
    const _todos = todos.concat();
    _todos.splice(idx, 1);
    setTodos(_todos);
    saveTodoToLocalStorage(_todos);
  }

  function clearTodos() {
    clearTodosFromStorage();
    setTodos([]);
  }

  return (
    <div className={styles.container}>
      <HeaderComponent onClear={clearTodos} />
      {renderTodo()}
      <AddTodoComponent onAdd={addTodos} />
    </div>
  );
}

export default App;
