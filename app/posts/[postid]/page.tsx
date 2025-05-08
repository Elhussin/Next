
// import PostViews from '../../components/postviews';
// import { Suspense } from 'react'; 
// type Props = {
//   params: {
//     postid: string;
//   };
// };

// export default  async function PostDetail({ params }: Props) {
//   const id = await params;
//   console.log(id)


//   return (
//     <div>
//         <h1>Post Detail</h1>
//         <Suspense fallback={<div>Loading Post Detail...</div>}>
//         <PostViews postid={id.postid} />
//         </Suspense>
      
//     </div>
//   );
// }
import PostViews from '../../components/postviews';
import { Suspense } from 'react'; 

// type Props = {
//   params: {
//     postid: string;
//   };
// };

export default async function PostDetail({ params }: any) {
  const { postid } = await params;

  return (
    <>
    <h1 className="text-2xl font-bold">Post Detail</h1>
    <div className='flex justify-center w-full'>
     
      <Suspense fallback={<div className='text-amber-300 text-2xl font-bold'>Loading Post ...</div>}>
        <PostViews postid={postid} />
      </Suspense>
    </div>  
    </>
  );
}
