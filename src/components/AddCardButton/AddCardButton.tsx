import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaTimes } from "react-icons/fa";

import { addCard } from "@/store/slices/cardsSlice";

import CardWrapper from "@components/CardWrapper";
import Input from "@components/Input";
import Button from "@components/Button";

import "./AddCardButton.scss";

function AddCardButton() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  function submitAddCard() {
    dispatch(addCard(value));
    setValue("");
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
    <CardWrapper
      cardId={0}
      transparent
      onClick={!isInputVisible ? toggleinputVisibility : undefined}
    >
      {!isInputVisible && (
        <div className="addCardButton__title">
          <FaPlus />
          <span>Add a card...</span>
        </div>
      )}
      {isInputVisible && (
        <div className="addCardButton__input-block">
          <Input
            style={{ marginBottom: 6 }}
            focused
            placeholder="Enter card name..."
            value={value}
            onChange={handleChange}
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
            onClick={toggleinputVisibility}
          />
        </div>
      )}
    </CardWrapper>
  );
}

export default AddCardButton;