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

  interface Board {
    _id: string;
    name: string;
  }
}

export {};
