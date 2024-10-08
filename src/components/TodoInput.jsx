import { useState } from "react"

export default function TodoInput({onAddTodo}) {
  const [todo, setTodo] = useState("");

  function handleTodo() {
    onAddTodo(todo)
    setTodo("")
  }

  return (
    <header>
      <input 
        placeholder='Enter todo...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleTodo}>Add</button>
    </header>
  )
}
