import { useDispatch } from "react-redux";
import CardWrapper from "../CardWrapper";

import { openModal } from "@/store/slices/modalSlice";

import "./Card.scss";

function Card({ id, title }: Card) {
  const dispatch = useDispatch();

  function handleOpenModal() {
    dispatch(openModal({}))
  }

  return (
    <CardWrapper cardId={id} onClick={handleOpenModal}>
      <div className="card__title">{title}</div>
    </CardWrapper>
  );
}

export default Card;
