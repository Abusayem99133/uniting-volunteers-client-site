import { useLoaderData, Link } from "react-router-dom";
// import pixel from "../assets/image/pexels-newmanphotographs-14831743.jpg";
import { Helmet } from "react-helmet-async";
const NeedVolunteer = () => {
  const volunteers = useLoaderData();
  console.log(volunteers);
  return (
    <div>
      <Helmet>
        <title>NeedVolunteer-Page</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {volunteers?.map((volunteer) => (
          <div key={volunteer?._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={volunteer?.thumbnail} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span className="font-bold">Title: </span>
                  {volunteer?.post_title}
                </h2>
                <p>
                  {" "}
                  <span className="font-bold">Location:</span>{" "}
                  {volunteer?.location}
                </p>
                <p>
                  <span className="font-bold">Category: </span>
                  {volunteer?.category}
                </p>
                <p>
                  <span className="font-bold">Deadline: </span>{" "}
                  {volunteer?.deadline}
                </p>
                <p>
                  <span className="font-bold">Volunteer: </span>
                  {volunteer?.volunteer_needed}
                </p>
                <p>
                  <span className="font-bold">Description: </span>{" "}
                  {volunteer?.description}
                </p>
                <hr />
                <h3>
                  <span className="font-bold">UserEmail: </span>{" "}
                  {volunteer?.email}
                </h3>
                <h2>
                  <span className="font-bold">UserName: </span>{" "}
                  {volunteer?.userName}
                </h2>
                <div className="card-actions justify-center">
                  <Link to={`/beVolunteer/${volunteer?._id}`}>
                    {" "}
                    <button className="btn btn-primary">Be a Volunteer</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
