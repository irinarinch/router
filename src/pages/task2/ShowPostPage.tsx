import { useEffect, useState } from "react";
import CardWithForm from "../../components/task2/CardWithForm/CardWithForm";
import Post, { TPost } from "../../components/task2/Post/Post";
import { PostService } from "../../services/posts.service";
import { useNavigate, useParams } from "react-router-dom";
import { IProps } from "../../components/task2/Main2/Main2";

const ShowPostPage = ({getPosts}: IProps) => {
  const [post, setPost] = useState<TPost | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const getCurrentPost = async () => {
      if (!id) return;
      const data = await PostService.getById(id);
      setPost(data.post);      
    };

    getCurrentPost();
  }, [id, isEdit]);

  const saveChanges = (content: string) => {
    if (!post) return;
    if (content === "") return;
    
    const putData = async () => {
      await PostService.put(post.id, content);
      setIsEdit(false);
      getPosts();   
    };

    putData();    
  };

  const remove = () => {
    if (!post) return;
 
    const removeCurrentPost = async () => {
      await PostService.remove(post.id);
      getPosts();
    };

    removeCurrentPost();    
    nav("/");
  };
  
  return (
    <>
      {isEdit
        ? post && (
            <CardWithForm
              toCreate={false}
              content={post.content}
              submit={saveChanges}
              setIsEdit={setIsEdit}
            />
          )
        : post && <Post post={post} isShow={true} setIsEdit={setIsEdit} remover={remove}/>}
    </>
  );
};

export default ShowPostPage;
