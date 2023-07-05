import { useDispatch, useSelector } from "react-redux";
import dinosaur from "../images/dinosaur.webp";
import { search, selectLoading, selectTileData } from "./slice";

export const Tile = () => {
  const loading = useSelector(selectLoading);
  const tileData = useSelector(selectTileData);
  const dispatch = useDispatch();

  const makeDate = (timestamp) => {
    const currentTime = new Date().getTime() / 1000; // Get the current timestamp in seconds
    const hoursDifference = Math.floor((currentTime - timestamp) / 3600); // Calculate the difference in hours
    return hoursDifference < 24 ? `${hoursDifference} hours` : `${(Math.floor(hoursDifference/24))} days`
  };
  

  return (
    <>
      {tileData.map((i) => (
        <div className="tile">
          <h2 className="tileTitle">{loading ? "..." : i.data.title}</h2>
          <img className="tileImage" src={i.data.url} />
          <p className="tileFooter">Posted By {i.data.author} {makeDate(i.data.created)} ago</p>
          <span className="material-symbols-outlined tileComment">comment</span>
          <span className="material-symbols-outlined tileArrowUp">
            arrow_upward
          </span>
          <p className="tileVotes">{i.data.score}</p>
          <span className="material-symbols-outlined tileArrowDown">
            arrow_downward
          </span>

          {/* <button type="button" onClick={() => dispatch(search())}>Click</button> */}
        </div>
      ))}
    </>
  );
};
