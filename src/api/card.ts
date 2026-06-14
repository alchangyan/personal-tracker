import { get, post, put, del } from "./request";

export const fetchCards = (listId: string) =>
  get<Card[]>(`/cards?listId=${listId}`);
export const createCard = (data: Pick<Card, "name" | "listId">) =>
  post("/cards", data);
export const fetchCardById = (id: string) => get<Card>(`/cards/${id}`);
export const updateCard = (cardId: string, data: Card) =>
  put(`/cards/${cardId}`, data);
export const deleteCard = (cardId: string) => del(`/cards/${cardId}`);
