import featuredImg from "../../../assets/book/caleb.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="container">
      <section className="mb-9">
        <h4 className="md:text-6xl text-4xl text-center text-orange-500 mb-2">
          We choose travel
        </h4>
        <h5 className="text-2xl text-center text-orange-500">
          -----to let our memories live------
        </h5>
      </section>
      <div className="mb-10 featured-item bg-fixed">
        <div className="md:flex justify-center items-center py-10 px-28 bg-slate-600 bg-opacity-60">
          <div className="hidden md:block mr-10">
            <img
              src={featuredImg}
              alt=""
              className="featured-img rounded-xl"
            />
          </div>
          <div>
            <p className="text-white font-bold mb-2">
              Welcome to our website! We are dedicated to providing exceptional
              fitness solutions tailored to your needs. Our experienced
              trainers, state-of-the-art facilities, and personalized br
              programs will help you achieve your fitness goals and embark on a
              journey of improved health and well-being.
            </p>
            <button className="btn btn-outline text-orange-100 btn-base-100 border-t-0 border-l-1 border-r-1 border-b-4 border-orange-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
