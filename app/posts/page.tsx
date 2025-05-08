import Todo  from "../components/todo";
import Link from "next/link";
export default async function Posts() {
  
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        next:{
            revalidate: 120 // revalidate after 60 seconds
        }
    });
    const posts = await response.json();
    // console.log(posts);
    return (
        <>
        <div className="main-container dark:bg-gray-800">
        Post Page
        </div>
       
            <h1>Posts</h1>
            <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " >
            {posts.map((post: any) => (
                <Link href={`/posts/${post.id}`}>
                <div key={post.id} className="w-full bg-blue-200 shadow-xl hover:shadow-2xl  hover:bg-blue-400   cursor-pointer">
                <h2  className="text-2xl font-bold dark:text-white  hover:text-red-600 transition-all duration-300 cursor-pointer">{post.id}:{post.title} </h2>
                <p className="text-gray-400">{post.body.slice(0, 100)}</p>
                
                </div>
                </Link>
            ))}
           </div>
      

        {/* <h1>Todo</h1>
        <Todo /> */}
        </>
    );
}