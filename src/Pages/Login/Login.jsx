import { Link } from "react-router-dom";
import login from "../../assets/image/login-img.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <div className="flex w-full p-5 bg-blue-600">
        <div className="w-1/2">
          <form className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
            <h2>
              Please Register Now{" "}
              <Link className="text-white " to="/register">
                ---Register
              </Link>
            </h2>
            <hr />
            <h2 className="text-white text-center ">Or SignIn</h2>
            <div className="flex justify-center space-x-6 text-4xl bg-white p-2">
              <span>
                <FcGoogle />
              </span>
              <span>
                <FaGithub />
              </span>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
