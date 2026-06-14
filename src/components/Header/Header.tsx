import { useEffect, useState, type MouseEvent } from "react";
import { FaTableColumns } from "react-icons/fa6";
import { FaCog, FaUserCircle } from "react-icons/fa";

import styles from "./Header.module.scss";
import Button from "@/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBoardById } from "@/api/board";

function Header() {
  const [boardData, setBoardData] = useState<Board | null>(null);
  const navigate = useNavigate();
  const { boardId } = useParams();

  function handleNavigate(e: MouseEvent<HTMLDivElement>) {
    const { id: route } = e.currentTarget.dataset;

    if (route) {
      navigate(route);
    }
  }

  useEffect(() => {
    async function getBoardData() {
      try {
        if (boardId) {
          const data = await fetchBoardById(boardId);

          setBoardData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBoardData();
  }, [boardId]);

  return (
    <div className={styles.header}>
      <nav>
        <Button
          icon={<FaTableColumns />}
          dataId="/"
          theme="blue"
          inline
          onClick={handleNavigate}
        />
        {boardData && <div className={styles.path}>{boardData.name}</div>}
      </nav>
      <div className={styles.actions}>
        <Button
          icon={<FaCog />}
          theme="blue"
          inline
          onClick={handleNavigate}
        />
        <Button
          icon={<FaUserCircle />}
          theme="blue"
          inline
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
}

export default Header;
