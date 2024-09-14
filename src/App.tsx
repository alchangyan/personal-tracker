import List from "@components/List";
import "./App.scss";

const data = [
  {
    title: "list",
    cards: [
      {
        title: "card",
      },
    ],
  },
  {
    title: "list",
    cards: [
      {
        title: "card",
      },
    ],
  },
];

function App() {
  return (
    <div className="app">
      {data.map((listData, i) => (
        <List key={i} {...listData} />
      ))}
    </div>
  );
}

export default App;
