import "./Card.scss";

interface CardProps {
  id: Card["id"];
}

function Card({ id }: CardProps) {
  return <div className="card">{id}</div>;
}

export default Card;
