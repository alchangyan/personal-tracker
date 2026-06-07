import AddListButton from "@components/AddListButton";
import List from "@/components/List";

import { useSelector } from "@/store";

import styles from "./Board.module.scss";

function Board() {
  const lists = useSelector((state) => state.lists);

  return (
    <div className={styles.board}>
      {lists.map((listData, i) => (
        <List key={i} {...listData} />
      ))}
      <AddListButton />
    </div>
  );
}

export default Board;
