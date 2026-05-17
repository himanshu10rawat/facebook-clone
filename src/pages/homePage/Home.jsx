
import style from "./home.module.css";
import CreatePost from "../../components/createPostComponent/CreatePost";
import PostList from "../../components/postListComponent/PostList";
import { usePostContext } from "../../context/postContext";

const Home = () => {
  const { state } = usePostContext();
  const { users } = state;

  return (
    <div className={style["home-page"]}>
      <aside></aside>
      <main>
        <CreatePost />
        {users
          .filter((singleUser) => singleUser.posts?.length)
          .map((singleUser) => (
            <PostList key={singleUser.userId} user={singleUser} />
          ))}
      </main>
      <aside></aside>
    </div>
  );
};

export default Home;
