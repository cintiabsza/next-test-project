import Link from "next/link"
export default function Page(){
	return (
	<>
	<div>Customers Page</div>
	<ul>
		<li>
			<Link href="/products/customers/invoices">Invoices</Link>
		</li>
	</ul>
	</>
	)
  }
  