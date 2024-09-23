import { useSelector } from "react-redux";

import AddListButton from "@components/AddListButton";
import List from "@components/List";
import Modal from "@/components/Modal";

import "./App.scss";

function App() {
  const lists = useSelector<RootState, List[]>((state) => state.lists);

  return (
    <div className="app">
      <div className="content">
        {lists.map((listData, i) => (
          <List key={i} {...listData}/>
        ))}
        <AddListButton />
      </div>
      <Modal />
    </div>
  );
}

export default App;
