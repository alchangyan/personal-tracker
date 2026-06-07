import type { MouseEvent } from "react";
import HomepageCardWrapper from "@/components/HomepageCardWrapper";

import styles from "./BoardCard.module.scss";
import { useNavigate } from "react-router-dom";

interface BoardCardProps {
  _id: string;
  name: string;
}

function BoardCard({ _id, name }: BoardCardProps) {
  const navigate = useNavigate();

  function handleSelectBoard(e: MouseEvent<HTMLDivElement>) {
    const { cardId } = e.currentTarget.dataset;

    navigate("/board/" + cardId);
  }

  return (
    <HomepageCardWrapper cardId={_id} onClick={handleSelectBoard}>
      <div className={styles.boardCard}>
        <div className={styles.name}>{name}</div>
      </div>
    </HomepageCardWrapper>
  );
}

export default BoardCard;
