import { useSelector } from "react-redux";
import {Post} from "./Post"
import {
  selectTileData,
} from "./slice";

export const Feed = () => {
  const tileData = useSelector(selectTileData);

  return (
    <>
      {tileData.map((i, index) => (
        <Post i={i} index={index} />
      ))}
    </>

  );
};
