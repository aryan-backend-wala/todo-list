export default function TodoList() {
  const todos = [
    'Go to the gym',
    'Eat the lunch at school',
    'Walk the dog in the evening'
  ]

  return (
    <ul className="main">
      {todos.map((todo, i) => (
        <li key={i}>
          {todo}
        </li>
      ))}
    </ul>
  )
}
