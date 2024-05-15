import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mx-auto max-h-screen flex-auto  items-center text-center">
      <h1 className="text-6xl text-orange-600 font-bold ">Oops!</h1>
      <h3 className="mt-4">404- PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might have been removed had its name or is
        temporarily unavailable.
      </p>
      <Link to="/">
        <button className="btn bg-blue-400">Go To Homepage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
