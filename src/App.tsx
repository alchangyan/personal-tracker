import { useSelector } from "react-redux";

import AddListButton from "@components/AddListButton";
import List from "@components/List";
import Modal from "@/components/Modal";

import db from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";

import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<unknown>("text");
  const lists = useSelector<RootState, List[]>((state) => state.lists);

  useEffect(() => {
    const database = getDatabase(db);

    const collectionRef = ref(database, "lists");

    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        console.log(typeof snapshot.val());
        
        if (typeof snapshot.val() === 'string') {
          // console.log(snapshot.val());
          setData(JSON.parse(snapshot.val()));
        }
      });
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="app">
      <div className="content">
        {lists.map((listData, i) => (
          <List key={i} {...listData} />
        ))}
        <AddListButton />
      </div>
      <Modal />
    </div>
  );
}

export default App;
