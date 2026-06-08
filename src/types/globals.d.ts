declare global {
  interface Card {
    _id: string;
    listId: string;
    name: string;
  }

  interface List {
    _id: string;
    boardId: string;
    name: string;
    cards: Card["id"][];
  }

  interface Board {
    _id: string;
    name: string;
  }
}

export {};
