import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

import { createList } from "@/api/list";

import ListWrapper from "@components/ListWrapper";
import Input from "@components/Input";
import Button from "@components/Button";

import { fetchListsRequest } from "@/store/slices/listsSlice";
import { useDispatch } from "@/store";

import styles from "./AddListButton.module.scss";

interface AddListButtonProps {
  boardId?: string;
}

function AddListButton({ boardId }: AddListButtonProps) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function submitAddList() {
    if (boardId) {
      const trimmedValue = value.trim();

      if (trimmedValue) {
        try {
          await createList({ name: trimmedValue, boardId });
        } catch (error) {
          console.log(error);
        } finally {
          setValue("");
          setIsInputVisible(false);
          dispatch(fetchListsRequest(boardId));
        }
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
    <ListWrapper
      listId={0}
      onClickOutside={hideInput}
      onClick={!isInputVisible ? showInput : undefined}
    >
      {!isInputVisible && (
        <div className={styles.title}>
          <FaPlus />
          <span>Add a list...</span>
        </div>
      )}
      {isInputVisible && (
        <div className={styles.inputBlock}>
          <Input
            style={{ marginBottom: 6 }}
            focused
            placeholder="Enter list name..."
            value={value}
            onChange={handleChange}
            onEnter={submitAddList}
          />
          <Button
            inline
            style={{ marginRight: 6 }}
            theme="blue"
            onClick={submitAddList}
          >
            Add list
          </Button>
          <Button
            inline
            style={{ marginRight: 6 }}
            icon={<FaTimes />}
            onClick={hideInput}
          />
        </div>
      )}
    </ListWrapper>
  );
}

export default AddListButton;
