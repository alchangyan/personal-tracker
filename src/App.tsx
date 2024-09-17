import List from "@components/List";
import AddListButton from "@components/AddListButton";
import "./App.scss";
import { useSelector } from "react-redux";

function App() {
  const lists = useSelector<RootState, List[]>((state) => state.lists);

  return (
    <div className="app">
      <div className="content">
        {lists.map((listData, i) => (
          <List key={i} {...listData} />
        ))}
        <AddListButton />
      </div>
    </div>
  );
}

export default App;
