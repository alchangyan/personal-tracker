import { useDispatch } from "react-redux";
import CardWrapper from "../CardWrapper";

import { openModal } from "@/store/slices/modalSlice";

import styles from "./Card.module.scss";

function Card({ id, title }: Card) {
  const dispatch = useDispatch();

  function handleOpenModal() {
    dispatch(openModal({}))
  }

  return (
    <CardWrapper cardId={id} onClick={handleOpenModal}>
      <div className={styles.title}>{title}</div>
    </CardWrapper>
  );
}

export default Card;
