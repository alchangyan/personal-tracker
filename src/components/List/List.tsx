import Card from "@components/Card";
import { useSelector } from "react-redux";

import "./List.scss";

function List({ id, title, cards }: List) {
  const cardsData = useSelector<RootState, Card[]>((state) =>
    state.cards.filter(({ id }) => cards.includes(id))
  );

  return (
    <div className="list" data-id={id}>
      <div className="list__title">{title}</div>
      <div className="list__content">
        {cardsData.map((data, i) => (
          <Card key={i} {...data}/>
        ))}
      </div>
    </div>
  );
}

export default List;
