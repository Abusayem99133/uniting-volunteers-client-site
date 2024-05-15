import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewDetails = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Details-Page</title>
      </Helmet>
      {/* <div className=" flex bg-base-100 shadow-xl">
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
      </div> */}
      <div className="hero min-h-screen bg-slate-300 p-8 items-center">
        <div className="lg:flex flex-row-reverse justify-between items-center bg-slate-50 p-6 rounded-md">
          <img
            src={viewDetails?.thumbnail}
            className="lg:w-[60%] rounded-lg "
          />
          <div>
            {/* <span className="bg-lime-400 ml-0  px-2 rounded-md">New</span> */}
            <h1 className="text-3xl mt-3   font-bold">
              <span className="font-bold">Title: </span>
              {viewDetails?.post_title}
            </h1>
            <p className=" mt-2 text-2xl">
              <span className="  font-bold">Category:</span>{" "}
              {viewDetails?.category}
            </p>
            <p className="  text-2xl mt-2">
              <span className="font-bold ">Volunteer:</span>{" "}
              {viewDetails?.volunteer_needed}
            </p>
            <p className="  text-2xl mt-2">
              <span className="font-bold ">Location:</span>{" "}
              {viewDetails?.location}
            </p>
            <p className="  text-2xl mt-2">
              <span className="font-bold ">Deadline:</span>{" "}
              {viewDetails?.deadline}
            </p>
            <p className="  mt-2">
              <span className=" font-bold">Description:</span>{" "}
              {viewDetails?.description}
            </p>
            <hr />

            <h2 className=" font-bold text-2xl">
              <span className="font-bold">UserEmail:</span>
              {viewDetails?.email}
            </h2>

            <p className="mt-2 ">
              <span className="font-bold">userName:</span>{" "}
              {viewDetails?.userName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
