import donar1 from "../../assets/image/image-1.jpg";
import donar2 from "../../assets/image/image-2.jpg";
import donar3 from "../../assets/image/image-3.jpg";
import donar4 from "../../assets/image/image-4.jpg";
const OurProject = () => {
  return (
    <div>
      <h2 className="text-3xl mb-4 text-orange-400">Out Current Projects</h2>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <div className="p-4 ">
          <div className="border p-2 hover:border-orange-600  card card-compact">
            <img className="border-b-2 border-orange-600" src={donar1} alt="" />
            <h2 className="text-2xl mb-3">Help to get water in Africa</h2>

            <p>
              If you think Okoa does a lot, you are right. What began as a dream
              to care for a few children became fuel to help bring
              transformation and stabilization to entire communities in
              partnership with the local Church. In all things, Okoa encourages
              indigenous autonomy.
            </p>
            <p>
              <span className="font-bold"> Donation:</span>{" "}
              <small>$23,434/$54.000</small>
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border p-2 card card-compact hover:border-orange-600">
            <img className="border-b-2 border-orange-600" src={donar2} alt="" />
            <h2 className="text-2xl mb-3">Help for education of kids</h2>
            <p>
              If you think Okoa does a lot, you are right. What began as a dream
              to care for a few children became fuel to help bring
              transformation and stabilization to entire communities in
              partnership with the local Church. In all things, Okoa encourages
              indigenous autonomy.
            </p>
            <p>
              <span className="font-bold"> Donation:</span>{" "}
              <small>$23,434/$54.000</small>
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border p-2 card card-compact hover:border-orange-600">
            <img className="border-b-2 border-orange-600" src={donar3} alt="" />
            <h2 className="text-2xl mb-3">Spend food in Ughanda</h2>
            <p>
              If you think Okoa does a lot, you are right. What began as a dream
              to care for a few children became fuel to help bring
              transformation and stabilization to entire communities in
              partnership with the local Church. In all things, Okoa encourages
              indigenous autonomy.
            </p>
            <p>
              <span className="font-bold"> Donation:</span>{" "}
              <small>$23,434/$54.000</small>
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="border p-2 card card-compact hover:border-orange-600">
            <img className="border-b-2 border-orange-600" src={donar4} alt="" />
            <h2 className="text-2xl mb-3 ">Spend for houses in</h2>

            <p>
              If you think Okoa does a lot, you are right. What began as a dream
              to care for a few children became fuel to help bring
              transformation and stabilization to entire communities in
              partnership with the local Church. In all things, Okoa encourages
              indigenous autonomy.
            </p>
            <p>
              <span className="font-bold"> Donation:</span>{" "}
              <small>$23,434/$54.000</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
