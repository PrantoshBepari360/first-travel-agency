import img from "../../assets/about/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg"; // Import the image

const Explore = () => {
  return (
    <div className="container">
      <section className="mb-9">
        <h4 className=" md:text-6xl text-4xl text-center text-orange-500 mb-2">
          Lets Explore the world
        </h4>
        <h5 className=" text-2xl text-center text-orange-500">
          -----With fun & Joy------
        </h5>
      </section>

      <section className="flex flex-col gap-20 sm:flex-row sm:gap-10">
        <div className="w-full sm:w-1/2 lg:w-2/5">
          <img src={img} className="w-full h-auto rounded-lg" alt="tour" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-3/5">
          <p className="text-lg text-justify">
            Welcome to our travel agency! We are passionate about creating
            memorable travel experiences for our clients. Our mission is to
            provide you with exceptional service and tailor-made itineraries
            that suit your preferences and interests. Our team of experienced
            travel experts is dedicated to helping you discover the worlds most
            captivating destinations.
          </p>
          <div className="flex gap-6 mb-4">
            <div className="flex gap-3  items-center">
              <img src="" className="w-10" alt="" />
              <h2 className="font-bold">Best travel tour agency & company</h2>
            </div>
            <div className="flex gap-3  items-center">
              <img src="" className="w-10" alt="" />
              <h2 className="font-bold">
                Most popular booking solution provider
              </h2>
            </div>
          </div>
          <p className="text-lg">
            {" "}
            At our agency, we believe that travel is not just about visiting new
            places. Its about immersing yourself in different cultures,
            connecting with locals, and creating lifelong memories. Let us take
            care of the details, so you can focus on enjoying every moment of
            your journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Explore;
