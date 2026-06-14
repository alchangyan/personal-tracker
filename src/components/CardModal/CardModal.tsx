import { useEffect, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { useParams } from "react-router-dom";

import { fetchCardById, deleteCard } from "@/api/card";

import Modal, { type ModalProps } from "@/components/Modal";
import ModalLayout from "@/components/ModalLayout";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";

import { fetchListsRequest } from "@/store/slices/listsSlice";
import { useDispatch } from "@/store";

import styles from "./CardModal.module.scss";

interface CardModalProps extends ModalProps {
  cardId: string | null;
}

function CardModal({ open, onClose, cardId }: CardModalProps) {
  const [cardData, setCardData] = useState<Card | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { boardId } = useParams();


  async function handleDeleteCard() {
    if (cardId && boardId) {
      try {
        await deleteCard(cardId)
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(fetchListsRequest(boardId));
        onClose();
      }
    }
  }

  useEffect(() => {
    async function getCardData() {
      try {
        if (cardId) {
          setIsLoading(true);
          const data = await fetchCardById(cardId);

          setCardData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCardData();
  }, [cardId]);

  return (
    <Modal open={open} onClose={onClose}>
      <ModalLayout title={cardData?.name} onClose={onClose}>
        <div className={styles.cardModal}>
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
            <div className={styles.content}></div>
            <div className={styles.actions}>
              <Button icon={<LuTrash2 />} theme="red" inline onClick={handleDeleteCard}></Button>
            </div>
            </>
          )}
        </div>
      </ModalLayout>
    </Modal>
  );
}

export default CardModal;
