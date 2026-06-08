import { get, post, put, del } from "./request";

export const fetchBoards = () => get<Board[]>("/boards");
export const createBoard = (data: Omit<Board, '_id'>) => post("/boards", data);
export const updateBoard = (boardId: string, data: Board) =>
  put(`/boards/${boardId}`, data);
export const deleteBoard = (boardId: string) => del(`/boards/${boardId}`);
