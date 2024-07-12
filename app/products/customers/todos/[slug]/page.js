import Link from "next/link";

// const Todos = ({params: {slug}}) => {
// 	return(
// 	<>
// 	  <p>
// 		Showing the todo for the 
// 		slug <strong>{slug}</strong>
// 	  </p>
// 	</>
// 	)
//   }
  
//   export default Todos;



async function getTodo(params) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.slug}`)
	const todos = await res.json()
   
	return todos
  }
   
  export default async function Todo({ params }) {
	const todos = await getTodo(params)
   
	return (
		<>
		<p>
		{todos.title}
		</p>
		<Link href={`/posts/${params.slug}`}>ver comentário</Link>
		</>
		
	) 
  }

  



//   export default function Todo() {

// 	const router = useRouter()

// 	const id = router.query.id

// 	return (
//   		<>
//   		 <Link href="/">
//   		 <a>Voltar</a>
// 		 </Link>
// 		 <h1>Exibindo o todo: {id}</h1>
// 		</>
//   	)
// }

	