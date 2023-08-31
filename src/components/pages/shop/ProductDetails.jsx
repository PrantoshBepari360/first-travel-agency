import { Link, useParams } from "react-router-dom";
import Heading from "../../../components/shared/common/Heading";
import { useFetchData } from "../../../hooks/useFetchData";

const ProductDetails = () => {
  const shop = useFetchData("/shop.json");
  const { id } = useParams();
  
  const details = shop.data?.find((item) => item.id === Number(id));

  const relatedProducts = shop.data?.filter(
    (item) => item.category === details?.category && item.id !== details.id
  );

  return (
    <>
      <div className="bg-[url('/src/assets/shop/shop.jpg')] bg-center bg-cover bg-no-repeat  h-96 bg-fixed mb-10 relative -z-10">
        <div className="py-10 lg:px-28 px-6 bg-slate-600 bg-opacity-80  h-96 text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Shop Details
            </h1>
            <p className="text-lg md:text-xl">Details About the product</p>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="px-5 py-20">
          <div className="md:flex items-center gap-10">
            <div className="w-full">
              <img
                alt="ecommerce"
                className="w-full md:w-3/4 object-cover object-center rounded"
                src={details?.image}
              />
            </div>
            <div className="w-full">
              <h1 className="text-4xl font-bold py-5">{details?.name}</h1>
              <p className="text-gray-900 text-3xl title-font font-medium">
                $ {details?.price}
              </p>

              <div className="flex gap-5 py-5">
                <div>
                  <span className="mr-2"> - </span>
                  <input
                    type="number"
                    placeholder="1"
                    className="p-2 border border-rounded text-center w-16"
                  />
                  <span className="ml-2"> + </span>
                </div>

                <button className="p-2 font-semibold border rounded text-[#00BDBB] border-[#00BDBB] hover:bg-[#00BDBB] hover:text-white hover:border-none">
                  Add to Cart
                </button>
              </div>

              <h3 className="mt-5 text-gray-400 text-xl title-font font-medium">
                category:{details?.category}
              </h3>
            </div>
          </div>
          <p className="mt-10 text-justify">{details?.description}</p>
        </div>
      </section>

      <section className="container">
        <div>
          <Heading heading2={"Related Products"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
          {relatedProducts?.slice(0, 4)?.map((item) => (
            <div key={item.id}>
              <Link to={`/product/${item.id}`}>
                <div
                  key={item.id}
                  className="p-4 border border-gray-300 rounded-md hover:border-[#00BDBB] shadow-md hover:shadow-[#00BDBB]"
                >
                  <div>
                    <img
                      alt={item.name}
                      className="object-cover object-center w-full h-full rounded-lg "
                      src={item.image}
                    />
                  </div>

                  <div className="mt-4 flex justify-between items-center mb-1">
                    <h1 className="text-lg font-bold">{item.name}</h1>

                    <div className="flex gap-2 items-center justify-center ">
                      <p className="mt-1">{item.price}</p>
                    </div>
                  </div>
                  <hr className="mb-1" />
                </div>
              </Link>

              <button className="w-full mt-2 p-2 font-semibold border rounded text-[#40c4c2] border-[#00BDBB] hover:bg-[#3aa4a2] hover:text-white hover:border-none">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
