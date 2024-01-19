import Card from "react-bootstrap/Card";
import style from "./authentication.module.css";

const StartCard = () => {
  return (
    <Card className={style.card}>
      <Card.Body>
        <Card.Title className={style.title}>Neto Social</Card.Title>
        <Card.Subtitle className="mt-2">Facebook and VK killer.</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default StartCard;
