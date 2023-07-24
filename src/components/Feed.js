import { useSelector } from "react-redux";
import { Post } from "./Post";
import { selectPostData, selectFilteredPostData } from "./slice";

export const Feed = () => {
  const postData = useSelector(selectPostData);
  const filteredPostData = useSelector(selectFilteredPostData);

  return (
    <>
      {filteredPostData?.map((i, index) => (
        <Post i={i} index={index} />
      ))}
    </>
  );
};
