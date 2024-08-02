import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "./userSlice";

export const AddPostForm = () => {

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [userId,setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e)=> setTitle(e.target.value);
  const onContentChanged = (e)=> setContent(e.target.value);
  const onAuthorChanged = (e)=> setUserId(e.target.value);

  const onSavePostClicked=()=>{
    if(title && content){
      dispatch(postAdded(title,content,userId));
      setTitle('');
      setContent('');
      
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map(user =>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <div>
      <section className="addPost">
        <h2>Add a New Post</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="title">Add Title</label>
          <input
            type = "text"
            name="title"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="author">Author</label>
          <select
            value={userId}
            onChange={onAuthorChanged}
            >
              <option value=""></option>
              {userOptions}
            </select>

          <label htmlFor="content">Add Content</label>
          <input
            type = "text"
            name="content"
            value={content}
            onChange={onContentChanged}
          />
        <button type="submit"
          disabled ={!canSave}
          onClick={onSavePostClicked}>
          Save Post
        </button>
        </form>
      </section>
    </div>
  )
}
