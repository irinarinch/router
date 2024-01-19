import Post, { TPost } from "../../components/task2/Post/Post";

interface IPostsPage {
  posts: TPost[];
}

const PostsPage = ({ posts }: IPostsPage) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} isShow={false} />
      ))}
    </>
  );
};

export default PostsPage;
