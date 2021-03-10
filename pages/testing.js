// posts will be populated at build time by getStaticProps()
function Blog({ asu }) {

  return (
    <ul>
      {/* {posts.map((post) => (
        <li>{post.title}</li>
      ))} */}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
Blog.getInitialProps = async ({ ctx }) => {
  return {
    asu: "kontol",
  };
};

export default Blog;
