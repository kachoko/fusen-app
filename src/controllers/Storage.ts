/**
 * TODOを取得する
 */
export function getTodosFromLocalStorage() {
    const data = localStorage.getItem("todos");
    if (!data) {
        return [];
    }
    return JSON.parse(data);
}

/**
 * TODOを追加する
 * @param todos 
 */
export function saveTodoToLocalStorage(todos: Array<string>) {
    const value = JSON.stringify(todos);
    localStorage.setItem("todos", value);
}

export function clearTodosFromStorage() {
    localStorage.removeItem("todos");
}
