import Card from "@components/Card";

import "./List.scss";
import ListWrapper from "@components/ListWrapper";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import AddCardButton from "@components/AddCardButton";

interface ListProps extends List {}

function List({ id, title, cards }: ListProps) {
  const stateCards = useSelector<RootState, Card[]>((state) => state.cards);

  const currentCards = useMemo(() => {
    return stateCards.filter(({ id }) => cards.includes(id));
  }, [stateCards]);

  return (
    <ListWrapper listId={id}>
      <div className="list__title">{title}</div>
      <div className="list__content">
        {currentCards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <AddCardButton />
      </div>
    </ListWrapper>
  );
}

export default List;
