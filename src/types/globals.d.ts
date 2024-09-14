declare global {
  interface Card {
    title: string;
  }

  interface List {
    title: string;
    cards: Card[];
  }
}

export {};
