import { LuPhoneCall } from "react-icons/lu";
import team1 from "../../assets/image/team-1.jpg";
import team2 from "../../assets/image/team-2.jpg";
import team3 from "../../assets/image/team-3.jpg";
import team4 from "../../assets/image/team-4.jpg";
import { MdOutlineMail } from "react-icons/md";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const GroupOfVolunteers = () => {
  return (
    <div>
      <h2 className="text-3xl mb-3 text-orange-400">Our group of Volunteers</h2>
      <hr />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <div className="p-4 ">
            <div className="border p-2 hover:border-orange-600 hover:border-dashed  card card-compact">
              <img
                className="border-b-2 border-orange-600"
                src={team1}
                alt=""
              />
              <h2 className="text-2xl mb-3 text-center">Jonathan Doe</h2>

              <p className="flex space-x-2 items-center mb-2">
                <LuPhoneCall />
                <span className="font-bold">Mobile: </span>
                +49 123 456 789
              </p>
              <p className="flex items-center space-x-2 mb-2">
                <MdOutlineMail /> <span className="font-bold">Email: </span>
                johndoe@email.com
              </p>
              <p className="flex space-x-4 ">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaGooglePlusG />
              </p>
            </div>
          </div>
          <div className="p-4 ">
            <div className="border p-2 hover:border-orange-600 hover:border-dashed  card card-compact">
              <img
                className="border-b-2 border-orange-600"
                src={team2}
                alt=""
              />
              <h2 className="text-2xl mb-3 text-center">Jonathan Doe</h2>

              <p className="flex space-x-2 items-center mb-2">
                <LuPhoneCall />
                <span className="font-bold">Mobile: </span>
                +49 123 456 789
              </p>
              <p className="flex items-center space-x-2 mb-2">
                <MdOutlineMail /> <span className="font-bold">Email: </span>
                johndoe@email.com
              </p>
              <p className="flex space-x-4 ">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaGooglePlusG />
              </p>
            </div>
          </div>
          <div className="p-4 ">
            <div className="border p-2 hover:border-orange-600 hover:border-dashed  card card-compact">
              <img
                className="border-b-2 border-orange-600"
                src={team3}
                alt=""
              />
              <h2 className="text-2xl mb-3 text-center">Jonathan Doe</h2>

              <p className="flex space-x-2 items-center mb-2">
                <LuPhoneCall />
                <span className="font-bold">Mobile: </span>
                +49 123 456 789
              </p>
              <p className="flex items-center space-x-2 mb-2">
                <MdOutlineMail /> <span className="font-bold">Email: </span>
                johndoe@email.com
              </p>
              <p className="flex space-x-4 ">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaGooglePlusG />
              </p>
            </div>
          </div>
          <div className="p-4 ">
            <div className="border p-2 hover:border-orange-600 hover:border-dashed  card card-compact">
              <img
                className="border-b-2 border-orange-600"
                src={team4}
                alt=""
              />
              <h2 className="text-2xl mb-3 text-center">Jonathan Doe</h2>

              <p className="flex space-x-2 items-center mb-2">
                <LuPhoneCall />
                <span className="font-bold">Mobile: </span>
                +49 123 456 789
              </p>
              <p className="flex items-center space-x-2 mb-2">
                <MdOutlineMail /> <span className="font-bold">Email: </span>
                johndoe@email.com
              </p>
              <p className="flex space-x-4 ">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaGooglePlusG />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupOfVolunteers;
