import { get, post, put, del } from "./request";

export const fetchLists = (boardId: string) =>
  get<List[]>(`/lists?boardId=${boardId}`);
export const createList = (data: Pick<List, "name" | "boardId">) =>
  post("/lists", data);
export const updateList = (listId: string, data: List) =>
  put(`/lists/${listId}`, data);
export const deleteList = (listId: string) => del(`/lists/${listId}`);
