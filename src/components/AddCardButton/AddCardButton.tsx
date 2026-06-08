import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

import { createCard } from "@/api/card";
import { fetchListsRequest } from "@/store/slices/listsSlice";
import { useDispatch } from "@/store";

import CardWrapper from "@components/CardWrapper";
import Input from "@components/Input";
import Button from "@components/Button";

import styles from "./AddCardButton.module.scss";

interface AddCardButtonProps {
  listId: List["_id"];
  boardId: Board["_id"];
}

function AddCardButton({ boardId, listId }: AddCardButtonProps) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  async function submitAddCard() {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      const newCard = {
        listId,
        name: trimmedValue,
      };

      try {
        await createCard(newCard);
      } catch (error) {
        console.log(error);
      } finally {
        setValue("");
        setIsInputVisible(false);
        dispatch(fetchListsRequest(boardId));
      }
    }
  }

  function showInput() {
    setIsInputVisible(true);
  }

  function hideInput() {
    setIsInputVisible(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  return (
    <CardWrapper
      transparent
      onClick={!isInputVisible ? showInput : undefined}
      onClickOutside={hideInput}
    >
      {!isInputVisible && (
        <div className={styles.title}>
          <FaPlus />
          <span>Add a card...</span>
        </div>
      )}
      {isInputVisible && (
        <div className={styles.inputBlock}>
          <Input
            style={{ marginBottom: 8 }}
            focused
            placeholder="Enter card name..."
            value={value}
            onChange={handleChange}
            onEnter={submitAddCard}
          />
          <Button
            inline
            style={{ marginRight: 6 }}
            theme="blue"
            onClick={submitAddCard}
          >
            Add card
          </Button>
          <Button
            inline
            style={{ marginRight: 6 }}
            icon={<FaTimes />}
            onClick={hideInput}
          />
        </div>
      )}
    </CardWrapper>
  );
}

export default AddCardButton;
