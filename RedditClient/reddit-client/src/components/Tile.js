import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectTileData,
  fetchComments,
  selectCommentData,
} from "./slice";

export const Tile = () => {
  const loading = useSelector(selectLoading);
  const tileData = useSelector(selectTileData);
  const commentData = useSelector(selectCommentData);
  const dispatch = useDispatch();

  const makeDate = (timestamp) => {
    const currentTime = new Date().getTime() / 1000; // Get the current timestamp in seconds
    const hoursDifference = Math.floor((currentTime - timestamp) / 3600); // Calculate the difference in hours
    return hoursDifference < 24
      ? `${hoursDifference} hours`
      : `${Math.floor(hoursDifference / 24)} days`;
  };

  return (
    <>
      {tileData.map((i, index) => (
        <div className="tile" key={index}>
          <h2 className="tileTitle">{loading ? "..." : i.data.title}</h2>
          <img
            className="tileImage"
            src={i.data.url}
            alt="alt text here"
            onClick={() => window.open(i.data.url, "_blank")}
          />
          <p className="tileFooter">
            Posted By {i.data.author} {makeDate(i.data.created)} ago
          </p>
          <span className="material-symbols-outlined tileArrowUp">
            arrow_upward
          </span>
          <p className="tileVotes">{i.data.score}</p>
          <span className="material-symbols-outlined tileArrowDown">
            arrow_downward
          </span>
          <button
            type="button"
            className="tileComment"
            onClick={(e) => {
              console.log("reached comment button on click");
              dispatch(fetchComments(index));
            }}
          >
            <span className="material-symbols-outlined tileComment">
              comment
            </span>
          </button>
          <section className="tileCommentData">
            {commentData[i.data.id]
              ? commentData[i.data.id].map((comment, index) => (
                  <p>{comment.data}</p>
                ))
              : undefined}
          </section>
        </div>
      ))}
    </>
  );
};
