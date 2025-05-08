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
    <div key={post.id} className='flex flex-col justify-center w-[600px] bg-blue-100 shadow-xl'>

      <h2 className='text-2xl font-bold dark:text-white  hover:text-red-600 transition-all duration-300 cursor-pointer'>{post.title}</h2>
      <p className='text-gray-400'>{post.body}</p>
    </div>
  );
}
