import Card from '@components/Card';

import "./List.scss";

function List({ title, cards }: List) {
  return (
    <div className="list">
      <div>{title}</div>
      <div className="content">
        {cards.map((cardData, i) => (
          <Card key={i} {...cardData}/>
        ))}
      </div>
    </div>
  );
}

export default List;
