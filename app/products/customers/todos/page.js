import styles from "../../../styles/todos.module.css"
import GetId from "./[slug]/page"
import Link from "next/link"


async function getTodos(params) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`, { cache: 'no-store' })
	const todos = await res.json()
   
	return todos
  }
   
  export default async function Dashboard(params) {
	const todos = await getTodos(params)
   
	return (
	<div>
		<h1 className={styles.title}>Tarefas para fazer:</h1>
	  <ul className={styles.todolist}>
		{todos.map((todo) => (
		  <li key={todo.id}>{todo.title} - 
		  <Link href={`todos/${todo.id}`}> ver mais</Link></li>
		))}
	  </ul>
	</div>
	)
  }
  
// async function getTodos() {

// 	const data = await fetch('https://jsonplaceholder.typicode.com/todos')

// 	const todos = await data.json()

// 	console.log(todos)
	
// }


// export default async function Todos() {
// 	const todos = await getTodos()

// 	return (
// 	<>
// 	<div className={styles.todolist}>
// 		<h1 >Tarefas para fazer:</h1>
// 			<ul> 
// 				{todos.map((todo) => (
// 				<li key={todo.id}>{todo.title}</li>
// 			)
// 			)}
// 			</ul>
// 	</div>
// 	</>
// 	)
// }
