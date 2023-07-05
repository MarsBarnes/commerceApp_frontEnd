import { useDispatch, useSelector } from "react-redux";
import {
  slice,
  search,
  selectSearchText,
  selectLoading,
  fetchData
} from "./slice";
import React from "react";

export const SearchAndFilter = () => {
    const {searchText} = useSelector(selectSearchText)
    const dispatch = useDispatch()
    const [textInput, setTextInput] = React.useState("");

    const handleKeyDown= (event) => {
        if(event.key === "Enter"){
            dispatch(search(textInput));
            dispatch(fetchData());}
    }

  return (
    <div className="searchAndFilterFlex">
      <h1 className="searchAndFilter searchAndFilterHeader">Reddit Basic</h1>
      <input
        className="searchBar"
        type="text"
        id="textInput"
        name="textInput"
        placeholder="Search"
        onChange={(e) => setTextInput(e.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
        value={textInput}
      ></input>
      <button
        type="button"
        onClick={(e) => {
          dispatch(search(textInput));
          dispatch(fetchData());
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
