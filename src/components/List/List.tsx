import Card from '@components/Card';

import "./List.scss";

function List({ title, cards }: List) {
  return (
    <div className="list">
      <div className="list__title">{title}</div>
      <div className="list__content">
        {cards.map((cardData, i) => (
          <Card key={i} {...cardData}/>
        ))}
      </div>
    </div>
  );
}

export default List;
