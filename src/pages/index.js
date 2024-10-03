import Words from "../compon/Fetch";
export async function getServerSideProps() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return {
    props: { posts },
  };
}

const Posts = (props) => {
  const posts = props.posts;
  return (
    <div>
      <div className="profileStyle">
        {posts.map((page, index) => {
          return <Words post={page} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Posts;
