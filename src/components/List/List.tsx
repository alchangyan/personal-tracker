import Card from "@components/Card";
import ListWrapper from "@components/ListWrapper";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import AddCardButton from "@components/AddCardButton";

import styles from "./List.module.scss";

interface ListProps {
  id: number;
  title: string;
  cards: number[];
}

function List({ id, title, cards }: ListProps) {
  const stateCards = useSelector<RootState, Card[]>((state) => state.cards);

  const currentCards = useMemo(() => {
    return stateCards.filter(({ id }) => cards.includes(id));
  }, [stateCards, cards]);

  return (
    <ListWrapper listId={id}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {currentCards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <AddCardButton listId={id} />
      </div>
    </ListWrapper>
  );
}

export default List;
