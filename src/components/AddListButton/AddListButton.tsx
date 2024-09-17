import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaCheck } from "react-icons/fa";
import cn from "classnames";

import { addList } from "@/store/slices/listsSlice";

import "./AddListButton.scss";
import ListWrapper from "../ListWrapper";

function AddListButton() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  function submitAddList() {
    dispatch(addList(value));
    setIsInputVisible(false);
  }

  function toggleinputVisibility() {
    setIsInputVisible((state) => !state);
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
      onClick={!isInputVisible ? toggleinputVisibility : () => {}}
    >
      {!isInputVisible && (
        <div className="addListButton__title">
          <FaPlus />
          <span>Add List...</span>
        </div>
      )}
      {isInputVisible && (
        <div className="addListButton__input-block">
          <input
            type="text"
            ref={inputRef}
            onChange={handleChange}
            placeholder="New List Name"
          />
          <div className="addListButton__submit-button" onClick={submitAddList}>
            <FaCheck />
          </div>
        </div>
      )}
    </ListWrapper>
  );
}

export default AddListButton;
