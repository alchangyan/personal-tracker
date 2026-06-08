import Card from "@components/Card";
import ListWrapper from "@components/ListWrapper";
import AddCardButton from "@components/AddCardButton";

import styles from "./List.module.scss";

function List({ _id, name, cards, boardId }: List) {
  return (
    <ListWrapper listId={_id}>
      <div className={styles.title}>{name}</div>
      <div className={styles.content}>
        {(cards || []).map((cardData) => (
          <Card key={cardData._id} {...cardData} />
        ))}
        <AddCardButton boardId={boardId} listId={_id} />
      </div>
    </ListWrapper>
  );
}

export default List;
