import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import profile from "../../assets/image/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/volunteer">Need Volunteer</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#0f172a]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Uniting Volunteers</a>
        </div>

        <div className="navbar-center hidden  lg:flex">
          <ul className="menu space-x-8 menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-2 border-sky-500 hover:bg-sky-500 font-bold"
                    : "font-bold text-white"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/volunteer"
                className={({ isActive }) =>
                  isActive
                    ? " border-2 border-sky-500 hover:bg-sky-500 font-bold text-white"
                    : "font-bold text-white"
                }
              >
                Need Volunteer
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                    : "font-bold text-white"
                }
              >
                Login
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mt-20 -ml-5  md:ml-0 md:mt-0  navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10">
                    <img
                      className="rounded-full"
                      alt="user photo"
                      src={user?.photoURL || profile}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm btn-ghost">
                      {user?.displayName || "User Name not found"}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => logOut()}
                      className="btn btn-sm btn-ghost"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm btn-ghost text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
          <h2 className=" text-white">My Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
