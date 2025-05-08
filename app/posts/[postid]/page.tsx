
import PostViews from '../../components/postviews';
import { Suspense } from 'react'; 
type Props = {
  params: {
    postid: string;
  };
};

export default  function PostDetail({ params }: Props) {
  const id =  params.postid;


  return (
    <div>
        <h1>Post Detail</h1>
        <Suspense fallback={<div>Loading Post Detail...</div>}>
        <PostViews postid={id} />
        </Suspense>
      
    </div>
  );
}
