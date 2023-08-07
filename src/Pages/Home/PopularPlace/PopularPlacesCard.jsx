import { Link } from "react-router-dom";

const PopularPlacesCard = ({ place }) => {
  const { _id, title, image, cost } = place;
  return (
    <div className="card w-96 bg-base-100 shadow-md hover:shadow-xl hover:shadow-orange-400">
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${cost}</p>
      <div className="h-64">
        <img src={image} alt={title} className="object-cover w-full h-full rounded-t-xl" />
      </div>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{title}</h2>
        {/* <p>{recipe}</p> */}
        <Link to={`/book/${_id}`}>
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border mt-4">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularPlacesCard;
