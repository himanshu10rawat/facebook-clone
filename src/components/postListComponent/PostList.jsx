
import Post from "../PostComponent/Post";
import style from "./postList.module.css";

const PostList = ({ user }) => {
  const posts = user?.posts || [];

  return (
    <>
      <div className={style["post-list"]}>
        {posts
          .map((list, index) => {
            return { list, index };
          })
          .reverse()
          .map(({ list, index }) => (
            <Post postList={list} key={list.postId || index} user={user} postIndex={index} />
          ))}
      </div>
    </>
  );
};

export default PostList;
