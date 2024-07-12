import Link from "next/link"
import styles from "../styles/navbar.module.css"

export default function Navbar () {

	return (
		<>
		<ul className={styles.navbar}>
			<li>
			<Link href="/">Home</Link>
			</li>
			<li>
				<Link  href="/about">About</Link>
			</li>
			<li>
				<Link  href="/products">Products</Link>
			</li>
			<li>
				<Link  href="/products/customers">Customers</Link>
			</li>
			<li>
				<Link  href="/products/customers/todos">Todos</Link>
			</li>
			<li>
				<Link  href="/posts">Posts</Link>
			</li>
			<li>
				<Link  href="/posts/comments">Comments</Link>
			</li>
		</ul>
		</>	
	)
}