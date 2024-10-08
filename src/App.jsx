import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const todos = [
    'Go to the gym',
    'Eat the lunch at school',
    'Walk the dog in the evening'
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
