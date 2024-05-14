import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import profile from "../../assets/image/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/needVolunteer">Need Volunteer</Link>
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
            <div tabIndex={0} role="button" className="  text-white  lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-[#0f172a] rounded-box w-52 text-white"
            >
              {navItems}
              <div className="">
                <details className="dropdown">
                  <summary className="m-1 py-2 px-4 rounded-md  hover:bg-sky-500 text-white">
                    My Profile
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[10] bg-[#0f172a] rounded-box w-52">
                    <li>
                      <NavLink
                        to="/addPost"
                        className={({ isActive }) =>
                          isActive
                            ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                            : "font-bold text-white"
                        }
                      >
                        Add Volunteer Post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/myPost"
                        className={({ isActive }) =>
                          isActive
                            ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                            : "font-bold text-white"
                        }
                      >
                        My Post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/request"
                        className={({ isActive }) =>
                          isActive
                            ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                            : "font-bold text-white"
                        }
                      >
                        Requested Post
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </div>
              <div className="sm:hidden lg:block ">
                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text"></span>
                    <input
                      type="checkbox"
                      className="toggle toggle-secondary "
                      onChange={handleToggle}
                    />
                  </label>
                </div>
              </div>
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
                to="/needVolunteer"
                className={({ isActive }) =>
                  isActive
                    ? " border-2 border-sky-500 hover:bg-sky-500 font-bold text-white"
                    : "font-bold text-white"
                }
              >
                Need Volunteer
              </NavLink>
            </li>
          </ul>
          <div className="">
            <details className="dropdown">
              <summary className="m-1 py-2 px-4 rounded-md  hover:bg-sky-500 text-white">
                My Profile
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[10] bg-[#0f172a] rounded-box w-52">
                <li>
                  <NavLink
                    to="/addPost"
                    className={({ isActive }) =>
                      isActive
                        ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                        : "font-bold text-white"
                    }
                  >
                    Add Volunteer Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myPost"
                    className={({ isActive }) =>
                      isActive
                        ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                        : "font-bold text-white"
                    }
                  >
                    My Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/request"
                    className={({ isActive }) =>
                      isActive
                        ? "  border-2 border-sky-500 hover:bg-sky-500 font-bold text-white "
                        : "font-bold text-white"
                    }
                  >
                    Requested Post
                  </NavLink>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="mt-20 -ml-5  md:ml-0 md:-mr- md:mt-0  navbar-end">
          <div className="form-control w-52 ">
            <label className="cursor-pointer label">
              <span className="label-text"></span>
              <input
                type="checkbox"
                className="toggle toggle-secondary "
                onChange={handleToggle}
              />
            </label>
          </div>
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
              <button className=" border-2 border-sky-500 py-2 px-4 hover:bg-sky-500 rounded-md text-white mr-4">
                Login
              </button>
            </Link>
          )}
          {/* drop down menu */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
