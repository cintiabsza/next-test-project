import styles from '../../styles/posts.module.css'


async function getPost(params) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
	const post = await res.json()
   
	return post
  }
   
  export default async function Post({ params }) {
	const post = await getPost(params)
   
	return (
		<>
		<p className={styles.title}>
		{post.title}
		</p>
		<p className={styles.postlist}>
		{post.body}
		</p>
		</>
		
	) 
  }

  
 
//   const BlogPost = ({params: {slug}}) => {
// 	return(
// 	<>
// 	  <p>
// 		Showing the blog post for the 
// 		slug <strong>{slug}</strong>
// 	  </p>
// 	</>

// 	)
//   }
  
//   export default BlogPost;

