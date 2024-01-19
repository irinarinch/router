import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import style from "./post.module.css";

export type TPost = {
  content: string;
  created: number;
  id: string;
};

interface IPostProps {
  post: TPost;
  isShow: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  remover?: () => void;
}

const Post = ({ post, isShow, setIsEdit, remover }: IPostProps) => {
  const nav = useNavigate();

  const onClick = () => {
    if (isShow) return;
    nav(`/posts/${post.id}`);
  };

  const editPost = () => {
    if (!setIsEdit) return;
    setIsEdit(true);
  }

  return (
    <div className={style.container} onClick={onClick}>
      <div className={style.header}>
        <img
          src="https://i.pravatar.cc/300"
          alt="photo"
          className={style.user_image}
        />
        <div className={style.user_info}>
          <div className={style.user_name}>Фамилия Имя</div>
          <div className={style.time}>{moment(post.created).fromNow()}</div>
        </div>
      </div>
      <div className={style.body}>{post.content}</div>
      <div className={style.footer}>
        <div className={style.empty_box}>Нравится / Комментировать</div>
        {!isShow ? (
          <div className={style.empty_box}>Напишите комментарий</div>
        ) : (
          <div className={style.buttons}>
            <button className={style.edit_button} onClick={editPost}>
              Изменить
            </button>
            <button className={style.remove_button} onClick={remover}>
              Удалить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
