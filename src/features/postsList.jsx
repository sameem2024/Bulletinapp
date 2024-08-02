import {useSelector} from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import { TimeAgo } from './Timeago';
import Reaction from './Reaction';


export const PostsList = () => {

    const posts = useSelector(selectAllPosts);
    const DescOrder = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
    let content = DescOrder.map(post => {
       return  <article key={post.id}>

            <h3>{post.title}</h3>

            <p>{post.content.substring(0,100)}</p>

            <p className='author'>
                <PostAuthor userId= {post.userId}/>
                <TimeAgo timestamp = {post.date} />
                <Reaction post = {post} />
            </p>
            
        </article>
    }
    )
   
  return (
    <div>
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    </div>
  )
}
