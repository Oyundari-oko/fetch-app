const Words = (props) => {
  console.log(props);
  const post = props.post;
  return (
    <div>
      <div className="style">
        <div>Name: {post.author}</div>
        <div>Date: {post.date}</div>
        <div>Work: {post.category}</div>
        <div>{post.content}</div>
      </div>
    </div>
  );
};
export default Words;
