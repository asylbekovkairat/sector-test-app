import { useDispatch } from "react-redux";
import { getData } from "./features/getData/getDataSlice";
import "./App.css";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import PaginationMenu from "./components/PaginationMenu/PaginationMenu";

function App() {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <>
      <SearchBar />
      <Table />
      <PaginationMenu/>
    </>
  );
}

export default App;
