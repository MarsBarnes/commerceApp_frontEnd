import { useSelector } from "react-redux";
import { Post } from "./Post";
import { selectFilteredPostData } from "./slice";

export const Feed = () => {
  const filteredPostData = useSelector(selectFilteredPostData);

  return (
    <>
      {filteredPostData?.map((i, index) => (
        <Post i={i} index={index} />
      ))}
    </>
  );
};
