import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewDetails = useLoaderData();

  return (
    <div className="">
      <div className=" flex bg-base-100 shadow-xl">
        <div>
          <figure>
            <img src={viewDetails?.thumbnail} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-bold">Title: </span>
            {viewDetails?.post_title}
          </h2>
          <p>
            <span className="font-bold">Category: </span>{" "}
            {viewDetails?.category}
          </p>
          <p>
            <span className="font-bold">Volunteer: </span>
            {viewDetails?.volunteer_needed}
          </p>
          <p>
            <span className="font-bold">Location: </span>{" "}
            {viewDetails?.location}
          </p>
          <p>
            <span className="font-bold">Deadline: </span>{" "}
            {viewDetails?.deadline}
          </p>
          <p>
            <span className="font-bold">Description: </span>{" "}
            {viewDetails?.description}
          </p>
          <hr />
          <h3>
            <span className="font-bold">UserEmail: </span>
            {viewDetails?.email}
          </h3>
          <h3>
            <span className="font-bold">UserName: </span>
            {viewDetails?.userName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
