import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    { id: 0, todo: "Go to the gym"},
  ])

  function handleAddTodos(newTodo){
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  return (
    <>
      <TodoInput onAddTodo={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
