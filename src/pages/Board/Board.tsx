import { useEffect } from "react";

import AddListButton from "@components/AddListButton";

import { fetchListsRequest } from "@/store/slices/listsSlice";
import { useDispatch, useSelector } from "@/store";

import styles from "./Board.module.scss";
import { useParams } from "react-router-dom";
import List from "@/components/List";

function Board() {
  const lists = useSelector((state) => state.lists.data);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchListsRequest(id));
    }
  }, [dispatch, id]);

  console.log(lists);

  return (
    <div className={styles.board}>
      {lists.map((listData, i) => (
        <List key={i} {...listData} />
      ))}
      <AddListButton boardId={id} />
    </div>
  );
}

export default Board;
