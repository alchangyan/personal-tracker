declare global {
  interface Card {
    id: number;
    title: string;
  }
  
  interface List {
    id: number;
    title: string;
    cards: Card['id'][];
  }

  interface RootState {
    lists: List[];
    cards: Card[];
    modal: ModalState;
  }
}

export {};
