import { useNavigate } from "react-router-dom";
import CardWithForm from "../../components/task2/CardWithForm/CardWithForm";
import { PostService } from "../../services/posts.service";
import { IProps } from "../../components/task2/Main2/Main2";

const NewPostPage = ({getPosts}: IProps) => {
  const nav = useNavigate();

  const createPost = (content: string) => {
    if (content === "") return;
    
    const addPost = async () => {
      await PostService.post(content);
      getPosts();
    };

    addPost();    
    nav("/");
  };

  return <CardWithForm toCreate={true} submit={createPost} />;
};

export default NewPostPage;
