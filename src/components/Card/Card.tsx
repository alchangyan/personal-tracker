import CardWrapper from "@/components/CardWrapper";

import styles from "./Card.module.scss";

interface CardProps extends Card {
  onClick: () => void;
}

function Card({ _id, name, onClick }: CardProps) {
  return (
    <CardWrapper cardId={_id} onClick={onClick}>
      <div className={styles.title}>{name}</div>
    </CardWrapper>
  );
}

export default Card;
