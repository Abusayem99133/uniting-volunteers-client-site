import { Link } from "react-router-dom";
import login from "../../assets/image/login-img.jpg";
const Register = () => {
  return (
    <div>
      <div className="flex w-full p-5 bg-blue-600">
        <div className="w-1/2">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <h2>
              Ready For Login Now{" "}
              <Link className="text-white " to="/login">
                ---Login
              </Link>
            </h2>
            <hr />
            <h2 className="text-white text-center ">Or SignIn</h2>
          </form>
        </div>
        <div className="w-1/2">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
