import { PostsList } from "./features/postsList";
import { AddPostForm } from "./features/AddPostForm";

function App() {
  return (
    <div className="container">
      <AddPostForm />
     <PostsList />
    </div>
  );
}

export default App;
