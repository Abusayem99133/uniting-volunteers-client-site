import { Link } from "react-router-dom";

const NewSection = ({ sec }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={sec?.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            <span className="font-bold">Title: </span>
            {sec?.post_title}
          </h2>
          <p>
            <span className="font-bold">Category: </span> {sec?.category}
          </p>
          <p>
            <span className="font-bold">Deadline: </span>
            {sec?.deadline}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/details/${sec?._id}`}>
              {" "}
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
