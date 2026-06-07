import { useState, type ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import cn from "classnames";

import { useDispatch } from "@/store";

import HomepageCardWrapper from "@/components/HomepageCardWrapper";
import Input from "@/components/Input";
import Button from "@/components/Button";

import styles from "./AddBoardCard.module.scss";
import { createBoard } from "@/api/board";
import { fetchBoardsRequest } from "@/store/slices/boardsSlice";

function AddBoardCard() {
  const [isActive, setIsActive] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function enableForm() {
    setIsActive(true);
  }

  function disableForm() {
    setIsActive(false);
    setBoardName("");
  }

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.value;
    setBoardName(name);
  }

  async function handleCreateBoard() {
    if (boardName.trim()) {
      try {
        setIsLoading(true);
        await createBoard({ name: boardName });
      } catch (error) {
        console.log(error);
      } finally {
        disableForm();
        setIsLoading(false);
        dispatch(fetchBoardsRequest());
      }
    }
  }

  return (
    <HomepageCardWrapper onClickOutside={disableForm}>
      <div
        className={cn(styles.addBoardCard, {
          [styles.active]: isActive,
        })}
        onClick={enableForm}
      >
        <div className={styles.button}>
          <FaPlus />
          <div>New Board</div>
        </div>
        <div className={styles.form}>
          <Input
            value={boardName}
            onChange={handleChangeName}
            focused={isActive}
            placeholder="Enter board name"
          />
          <Button theme="blue" onClick={handleCreateBoard} disabled={isLoading}>
            Create
          </Button>
        </div>
      </div>
    </HomepageCardWrapper>
  );
}

export default AddBoardCard;
