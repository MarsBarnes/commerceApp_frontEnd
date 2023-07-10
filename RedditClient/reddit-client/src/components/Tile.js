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

  const pickImg = (i) => {
    if (i.data.is_video) {
      return (
        <video
          controls
          className="tileImage"
          alt="Reddit does not have altText."
          width="300"
        >
          <source src={i.data.secure_media.reddit_video.fallback_url} />
          ...
        </video>
      );
    }
    if (i.data.is_self) {
      return <p className="tileImage">{i.data.selftext}</p>;
    }
    if (i.data.thumbnail === "nsfw") {
      return (
        <button className="tileNSFW">
          <span class="material-symbols-outlined">warning</span> NSFW
        </button>
      );
    }
    if (i.data.thumbnail) {
      return (
        <img
          className="tileImage"
          src={i.data.thumbnail}
          alt="Reddit does not have altText."
        />
      );
    } else {
      return <p>this is a text post</p>;
    }
  };

  return (
    <>
      {tileData.map((i, index) => (
        <div className="tile" key={index}>
          <h2 className="tileTitle">{loading ? "..." : i.data.title}</h2>
          <a href={i.data.url} target="_blank">
            {pickImg(i)}
          </a>
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
            {commentData?.[i.data.id]
              ? commentData[i.data.id].map((comment, index) => (
                  <p key={index}>{comment.data}</p>
                ))
              : undefined}
          </section>
        </div>
      ))}
    </>
  );
};
