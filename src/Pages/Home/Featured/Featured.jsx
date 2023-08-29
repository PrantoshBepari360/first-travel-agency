import featuredImg from "../../../assets/book/caleb.jpg";
import ColorPera from "../../../reuse/ColPera";
import H2P2Ruse from '../../../reuse/Heading2'

const Featured = () => {
  return (
    <div className="container">
      <section className="mb-9">

       
        <H2P2Ruse heading2=" We choose travel"  />

        <ColorPera para4=" -----to let our memories live------"/>
      </section>
      <div className="bg-[url('/public/dino.jpg')] bg-center bg-cover bg-no-repeat bg-fixed mb-10">
        <div className="lg:flex justify-center items-center gap-8 py-10 lg:px-28 px-6 bg-slate-600 bg-opacity-60">
          <div className="hidden md:block lg:w-2/4 md:mb-7 lg:mb-0">
            <img
              src={featuredImg}
              alt="Feature Image"
              className="rounded-xl "
            />
          </div>
          <div className="lg:w-2/4">
            <p className="text-white font-bold mb-2  leading-7 text-justify">Welcome to our website! We are dedicated to providing exceptional
              fitness solutions tailored to your needs. Our experienced
              trainers, state-of-the-art facilities, and personalized br
              programs will help you achieve your fitness goals and embark on a
              journey of improved health and well-being.</p>
       


            <button className="text-white px-3 py-2 rounded bg-orange-400 hover:bg-orange-500 border-b-2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
