import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaTimes } from "react-icons/fa";

import { addList } from "@/store/slices/listsSlice";

import ListWrapper from "@components/ListWrapper";
import Input from "@components/Input";
import Button from "@components/Button";

import "./AddListButton.scss";

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
      onClick={!isInputVisible ? toggleinputVisibility : undefined}
    >
      {!isInputVisible && (
        <div className="addListButton__title">
          <FaPlus />
          <span>Add List...</span>
        </div>
      )}
      {isInputVisible && (
        <div className="addListButton__input-block">
          <Input style={{ marginBottom: 6 }} focused placeholder="Enter list name..." />
          <Button inline style={{ marginRight: 6 }} theme="blue">
            Add list
          </Button>
          <Button inline style={{ marginRight: 6 }} icon={<FaTimes />} onClick={toggleinputVisibility}/>
          {/* <input
            type="text"
            ref={inputRef}
            onChange={handleChange}
          /> */}
          {/* onClick={submitAddList} */}
          {/* <FaCheck /> */}
        </div>
      )}
    </ListWrapper>
  );
}

export default AddListButton;
