import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/image/login-img.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { signIn, googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        toast.success("Success Login");
        if (result.user) {
          navigate(from);
        }
      })
      .catch(() => {
        toast.error("Login Error");
      });
  };
  const handleSocialLogIn = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Login-Page</title>
      </Helmet>
      <div className="flex w-full p-5 bg-blue-600">
        <div className="w-1/2">
          <form onSubmit={handleLogin} className="card-body">
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
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="ml-96 -mt-8"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <h2>
              Please Register Now{" "}
              <Link className="text-white font-bold text-center" to="/register">
                Register
              </Link>
            </h2>
            <hr />
            <h2 className="text-white text-center ">Or SignIn With</h2>
            <div className="flex justify-center space-x-6 text-4xl bg-white p-2">
              <span>
                <button onClick={() => handleSocialLogIn(googleLogin)}>
                  {" "}
                  <FcGoogle />
                </button>
              </span>
              <span>
                <button onClick={() => handleSocialLogIn(gitHubLogin)}>
                  <FaGithub />
                </button>
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
