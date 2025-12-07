import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    // functional state update // state update is asynchronous so to get most recent update
    setTodos(latestTodos => {
      return [
        ...latestTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(latestTodos => {
      return latestTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(latestTodos => {
      return latestTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <div className="tw-w-1/2 tw-mx-auto tw-h-[100dvh] tw-overflow-y-auto tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-6">
      <h1 className="tw-text-2xl tw-font-bold">
        Todo List <i className="fa-regular fa-circle-check"></i>
      </h1>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}
