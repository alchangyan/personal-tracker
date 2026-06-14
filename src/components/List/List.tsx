import type { MouseEvent } from "react";

import Card from "@components/Card";
import ListWrapper from "@components/ListWrapper";
import AddCardButton from "@components/AddCardButton";
import CardModal from "@/components/CardModal";

import styles from "./List.module.scss";
import { useState } from "react";

function List({ _id, name, cards, boardId }: List) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardId, setCardId] = useState<string | null>(null);

  function handleOpenModal(e: MouseEvent<HTMLDivElement>) {
    const { id } = e.currentTarget.dataset;

    setCardId(id as string);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setCardId(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <ListWrapper listId={_id}>
        <div className={styles.title}>{name}</div>
        <div className={styles.content}>
          {(cards || []).map((cardData) => (
            <Card key={cardData._id} {...cardData} onClick={handleOpenModal} />
          ))}
          <AddCardButton boardId={boardId} listId={_id} />
        </div>
      </ListWrapper>
      <CardModal open={isModalOpen} onClose={handleCloseModal} cardId={cardId}/>
    </>
  );
}

export default List;
