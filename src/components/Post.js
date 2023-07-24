import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { TileMedia } from "./TileMedia";
import {
  selectLoading,
  fetchComments,
  selectCommentData,
} from "./slice";

export const Post = ({ i, index }) => {
  const loading = useSelector(selectLoading);
  const commentData = useSelector(selectCommentData);
  const dispatch = useDispatch();
  const [commentsTurnedOn, setCommentsTurnedOn] = useState(false);

  const makeDate = (timestamp) => {
    const currentTime = new Date().getTime() / 1000; // Get the current timestamp in seconds
    const hoursDifference = Math.floor((currentTime - timestamp) / 3600); // Calculate the difference in hours
    return hoursDifference < 24
      ? `${hoursDifference} hours`
      : `${Math.floor(hoursDifference / 24)} days`;
  };

  return (
    <div className="tile" key={i.data.id}>
      <h2 className="tileTitle">
        <a href={i.data.url} target="_blank" rel="noreferrer" >
          {loading ? "..." : i.data.title}
        </a>
      </h2>
      <TileMedia i={i} />
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
          commentsTurnedOn
            ? setCommentsTurnedOn(false)
            : setCommentsTurnedOn(true);
          console.log(commentsTurnedOn);
        }}
      >
        <span className="material-symbols-outlined tileComment">comment</span>
      </button>
      {commentsTurnedOn && (
        <section className="tileCommentData">
          {commentData?.[i.data.id]
            ? commentData[i.data.id].map((comment, index) => (
                <p className="individualComment" key={index}>
                  {comment.data}
                </p>
              ))
            : undefined}
        </section>
      )}
    </div>
  );
};
