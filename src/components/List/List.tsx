import Card from "@components/Card";

import "./List.scss";
import ListWrapper from "../ListWrapper";

interface ListProps extends List {}

function List({ id, title, cards }: ListProps) {
  console.log(cards);

  return (
    <ListWrapper listId={id}>
      <div className="list__title">{title}</div>
      <div className="list__content">
        {cards.map((cardId) => (
          <Card key={cardId} id={cardId} />
        ))}
      </div>
    </ListWrapper>
  );
}

export default List;
