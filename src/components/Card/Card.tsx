import CardWrapper from "../CardWrapper";
import "./Card.scss";

function Card({ id, title }: Card) {
  return (
    <CardWrapper cardId={id} onClick={() => {}}>
      <div className="card__title">{title}</div>
    </CardWrapper>
  );
}

export default Card;
