import { useDispatch, useSelector } from "react-redux";
import { slice, search, selectLoading } from "./slice";

export const SearchAndFilter = () => {

    const dispatch = useDispatch()


  return (
    <div className="searchAndFilterFlex">
      <h1 className="searchAndFilter searchAndFilterHeader">Reddit Basic</h1>
      <input
        className="searchBar"
        type="text"
        id="searchText"
        name="searchText"
        placeholder="Search"
      ></input>
      <button
        type="button"
        onClick={() => {
          dispatch(slice.search);
        }}
      >
        <span className="material-symbols-outlined searchAndFilter search searchAndFilterIcons">
          search
        </span>
      </button>
      <span className="material-symbols-outlined searchAndFilter filter searchAndFilterIcons">
        filter_list
      </span>
    </div>
  );
};
