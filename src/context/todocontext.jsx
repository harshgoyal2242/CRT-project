import { useState } from 'react'
import { TodoContext } from './todocontextvalue'

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: trimmedTitle, completed: false },
    ])
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

