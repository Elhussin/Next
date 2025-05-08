import { notFound } from 'next/navigation';

export default async function PostViews(props:any) {

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.postid}`, {
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    return notFound();
  }

  const post = await response.json();

  return (
    <div key={post.id}>
      <h1 style={{color:"red"}}>Post Detail {post.id} </h1>
      <h2 className='text-2xl font-bold dark:text-white  hover:text-red-600 transition-all duration-300 cursor-pointer'>{post.title}</h2>
      <p className='text-gray-400'>{post.body}</p>
    </div>
  );
}
