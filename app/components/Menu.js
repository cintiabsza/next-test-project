import Link from "next/link"
import styles from "../styles/navbar.module.css"

export default function Menu () {

	return (
		<>
		<ul className={styles.navbar}>
			<li>
			<Link href="/">Preferences</Link>
			</li>
			<li>
				<Link  href="/posts/comments">Lists</Link>
			</li>
			<li> 
		  		<Link href="/products/customers/invoices">Invoices</Link>
			</li>
		</ul>
		</>	
	)
}