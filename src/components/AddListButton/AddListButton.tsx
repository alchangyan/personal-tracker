import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaTimes } from "react-icons/fa";

import { addList } from "@/store/slices/listsSlice";

import ListWrapper from "@components/ListWrapper";
import Input from "@components/Input";
import Button from "@components/Button";

import styles from "./AddListButton.module.scss";

function AddListButton() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  function submitAddList() {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      dispatch(addList(trimmedValue));
      setValue("");
      setIsInputVisible(false);
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
