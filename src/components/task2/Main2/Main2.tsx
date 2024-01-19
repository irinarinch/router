import { Navigate, Route, Routes } from "react-router-dom";
import PostsPage from "../../../pages/task2/PostsPage";
import NewPostPage from "../../../pages/task2/NewPostPage";
import ShowPostPage from "../../../pages/task2/ShowPostPage";
import { useEffect, useState } from "react";
import { TPost } from "../Post/Post";
import { PostService } from "../../../services/posts.service";

export interface IProps {
  getPosts: () => void;
}

const Main2 = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  const getPosts = async () => {
    const data = await PostService.getAll();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);  

  return (
    <>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={<PostsPage posts={posts}/>}
          />
          <Route
            path="/posts/new"
            element={<NewPostPage getPosts={getPosts} />}
          />
          <Route
            path="/posts/:id"
            element={<ShowPostPage getPosts={getPosts} />}
          />
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </div>
    </>
  );
};

export default Main2;
