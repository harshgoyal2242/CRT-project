import { useState } from 'react'
import { useTodos } from '../context/usetodos'

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()
  const [title, setTitle] = useState('')
  const remainingCount = todos.filter((todo) => !todo.completed).length

  function handleSubmit(event) {
    event.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <main className="page home-page">
      <section className="intro">
        <p className="eyebrow">A gentler way to plan</p>
        <h1>Make room for what matters.</h1>
        <p>Keep today&apos;s priorities close, clear, and comfortably within reach.</p>
      </section>
      <section className="todo-panel" aria-labelledby="todo-heading">
        <div className="panel-heading">
          <h2 id="todo-heading">Today</h2>
          <span>{remainingCount} remaining</span>
        </div>
        <form className="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="new-task">Add a task</label>
          <div className="input-row">
            <input
              id="new-task"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="What needs your attention?"
            />
            <button type="submit">Add task</button>
          </div>
        </form>
        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="empty-state">Your list is clear. Add something small to begin.</li>
          ) : (
            todos.map((todo) => (
              <li className={`todo ${todo.completed ? 'completed' : ''}`} key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.title}</span>
                </label>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteTodo(todo.id)}
                  aria-label={`Delete ${todo.title}`}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  )
}
