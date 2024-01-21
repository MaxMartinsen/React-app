import Post from './Post/Post.jsx';

function Posts() {
  return (
    <>
      {/* Post */}
      <Post title="Hi,how are you?" likesCount="2" />
      <Post title="It's my first post" likesCount="200" />
    </>
  );
}
export default Posts;
