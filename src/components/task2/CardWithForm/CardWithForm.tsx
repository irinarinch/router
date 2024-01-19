import { IoCloseOutline } from "react-icons/io5";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

interface ICardWithForm {
  toCreate: boolean;
  submit: (content: string) => void;
  content?: string;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

const CardWithForm = (props: ICardWithForm) => {
  const [value, setValue] = useState("");
  const nav = useNavigate();

  const { toCreate, submit, content, setIsEdit } = props;

  useEffect(() => {
    if (!content) return;
    setValue(content);
  }, [content]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(value.trim());
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onCancel = () => {
    toCreate ? nav("/") : setIsEdit && setIsEdit(false);
  };

  const getHeader = () => {
    return (
      toCreate ? 
      <div>Публикация / Фото Видео / Прямой эфир / Еще</div> :
      <div className={style.title}>Редактировать публикацию</div>
    )
  }

  const getButton = (value: string) => {
    return (
      <button type="submit" className={style.button}>
        {value}
      </button>
    )
  }

  const getActionsBlock = () => {
    return (
      <div className={style.empty_box}>
        <button className={style.actions}> Фото/Видео </button>
        <button className={style.actions}> Отметить друзей </button>
        <button className={style.actions}> Чувства/действия </button>
        <button className={style.actions}> Отметить посещение </button>
        <button className={style.actions}> GIF </button>
      </div>
    );
  };

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <div className={toCreate ? style.header : style.edit_header}>
        {getHeader()}
        <IoCloseOutline
          size={20}
          color="gray"
          cursor="pointer"
          onClick={onCancel}
        />
      </div>
      <div className={style.body}>
        <img
          src="https://i.pravatar.cc/300"
          className={style.image}
        />
        <textarea         
          className={style.textarea}
          onChange={onChange}
          value={value}
          autoFocus
        ></textarea>
      </div>
      {toCreate ? false : getActionsBlock()}
      <div className={style.footer}>
        {toCreate ? getButton("Опубликовать") : getButton("Сохранить")}
      </div>
    </form>
  );
};

export default CardWithForm;