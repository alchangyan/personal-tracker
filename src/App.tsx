import List from "@components/List";
import "./App.scss";

const data = [
  {
    title: "List",
    cards: [
      {
        title: "Card",
      },
      {
        title: "Card",
      },
    ],
  },
  {
    title: "List",
    cards: [
      {
        title: "Card",
      },
    ],
  },
];

function App() {
  return (
    <div className="app">
      <div className="content">
        {data.map((listData, i) => (
          <List key={i} {...listData} />
        ))}
      </div>
    </div>
  );
}

export default App;
