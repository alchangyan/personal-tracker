import { useEffect } from "react";
import { useParams } from "react-router-dom";

import AddListButton from "@components/AddListButton";
import List from "@/components/List";
import Layout from "@/components/Layout";

import { fetchListsRequest, resetLists } from "@/store/slices/listsSlice";
import { useDispatch, useSelector } from "@/store";

import styles from "./Board.module.scss";

function Board() {
  const lists = useSelector((state) => state.lists.data);
  const dispatch = useDispatch();

  const { boardId } = useParams();

  useEffect(() => {
    dispatch(resetLists());

    if (boardId) {
      dispatch(fetchListsRequest(boardId));
    }
  }, [dispatch, boardId]);

  return (
    <Layout>
      <div className={styles.board}>
        {lists.map((listData, i) => (
          <List key={i} {...listData} />
        ))}
        <AddListButton boardId={boardId} />
      </div>
    </Layout>
  );
}

export default Board;
