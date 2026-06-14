import { useEffect } from "react";

import BoardCard from "@/components/BoardCard";
import AddBoardCard from "@/components/AddBoardCard";
import Layout from "@/components/Layout";

import { fetchBoardsRequest } from "@/store/slices/boardsSlice";

import { useSelector, useDispatch } from "@/store";

import styles from "./Homepage.module.scss";

function Homepage() {
  const boards = useSelector((state) => state.boards.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoardsRequest());
  }, [dispatch]);

  return (
    <Layout>
      <div className={styles.homepage}>
        {boards.map((boardData, i) => (
          <BoardCard key={i} {...boardData} />
        ))}
        <AddBoardCard />
      </div>
    </Layout>
  );
}

export default Homepage;
