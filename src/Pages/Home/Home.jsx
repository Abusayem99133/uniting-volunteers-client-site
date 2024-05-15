import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import NewSection from "./NewSection";
import OurProject from "./OurProject";
import GroupOfVolunteers from "./GroupOfVolunteers";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const newSec = useLoaderData();
  console.log(newSec);
  return (
    <div>
      <Helmet>
        <title>Home-Page</title>
      </Helmet>
      <Banner></Banner>
      <div className="mt-12">
        <h2 className="text-3xl mb-3 text-orange-400">New Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newSec?.slice(0 - 6)?.map((sec) => (
            <NewSection key={sec._id} sec={sec}></NewSection>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <OurProject></OurProject>
      </div>
      <div className="mt-12">
        <GroupOfVolunteers></GroupOfVolunteers>
      </div>
      <div className="text-center">
        <Link to="/needVolunteer" className="">
          <button
            className="btn btn-outline 
      "
          >
            See All <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
