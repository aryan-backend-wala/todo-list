import TodoCard from "./TodoCard"

export default function TodoList({todos}) {
  
  return (
    <ul className="main">
      {
        todos.map((todo, i) => (
          <TodoCard key={i}>
            <p>{todo.todo}</p>
          </TodoCard>
        ))
      }
    </ul>
  )
}
