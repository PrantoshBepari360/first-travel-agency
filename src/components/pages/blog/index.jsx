import BlogCart from "./blogCart/BlogCart";
import blogImg from "../../../assets/about/blog.jpeg";
import Banner from "../contacts/Banner";

const Blog = () => {
  return (
    <>
      <Banner image={blogImg} name={"Blog..."} />
      <div className="container">
        <BlogCart />
      </div>
    </>
  );
};

export default Blog;
