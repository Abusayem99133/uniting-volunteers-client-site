import { useLoaderData, Link } from "react-router-dom";
import pixel from "../assets/image/pexels-newmanphotographs-14831743.jpg";
import { Helmet } from "react-helmet-async";
const NeedVolunteer = () => {
  const volunteers = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>NeedVolunteer-Page</title>
      </Helmet>
      <div>
        {volunteers?.map((volunteer) => (
          <div key={volunteer._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={volunteer.thumbnail} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{volunteer.post_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to={`/beVolunteer/${volunteer._id}`}>
                    {" "}
                    <button className="btn btn-primary">Be a Volunteer</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>hlw volunteer need</h2>
    </div>
  );
};

export default NeedVolunteer;
