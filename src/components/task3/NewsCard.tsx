import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./authentication.module.css";

export type TNews = {
  id: string;
  title: string;
  image: string;
  content: string;
};

interface INewsCard {
  news: TNews;
}

const NewsCard = ({ news }: INewsCard) => {
  const nav = useNavigate();

  const onClick = () => {
    nav(`/news/${news.id}`);
  };

  return (
    <Card className={style.news} onClick={onClick}>
      <Card.Img variant="top" src={"https://i.pravatar.cc/300"} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
