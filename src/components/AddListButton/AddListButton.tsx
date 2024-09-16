import { FaPlus } from "react-icons/fa";
import "./AddListButton.scss";
import { useDispatch } from "react-redux";
import { addList } from "@/store/slices/listsSlice";

function AddListButton() {
  const dispatch = useDispatch();

  function submitAddList() {
    dispatch(addList('test'))
  }

  return (
    <div className="addListButton" onClick={submitAddList}>
      <div className="addListButton__title">
        <FaPlus />
        <span>Add List...</span>
      </div>
    </div>
  );
}

export default AddListButton;
