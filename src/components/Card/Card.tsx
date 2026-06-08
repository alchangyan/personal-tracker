import { useDispatch } from "react-redux";
import CardWrapper from "../CardWrapper";

import { openModal } from "@/store/slices/modalSlice";

import styles from "./Card.module.scss";

function Card({ _id, name }: Card) {
  const dispatch = useDispatch();

  function handleOpenModal() {
    dispatch(openModal({}))
  }

  return (
    <CardWrapper cardId={_id} onClick={handleOpenModal}>
      <div className={styles.title}>{name}</div>
    </CardWrapper>
  );
}

export default Card;
