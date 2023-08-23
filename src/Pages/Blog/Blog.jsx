import BlogCart from "./BlogCart/BlogCart";
import blogImg from "../../assets/about/blog.jpeg";
import Banner from "../contacts/Banner";

const Blog = () => {
  return (
    <div>
      <Banner image={blogImg} name={"Blog..."} />
      <div className="container">
        <BlogCart />
      </div>
    </div>
  );
};

export default Blog;
