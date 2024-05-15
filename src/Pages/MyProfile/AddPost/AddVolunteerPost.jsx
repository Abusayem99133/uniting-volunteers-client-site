import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  console.log(user);
  const handleAddPost = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const thumbnail = form.get("thumbnail");
    const post_title = form.get("post_title");
    const email = user.email;
    const description = form.get("description");
    const category = form.get("category");
    const location = form.get("location");
    const volunteer_needed = form.get("volunteer_needed");
    const deadline = form.get("deadline");
    const userName = user.displayName;
    const addPost = {
      thumbnail,
      post_title,

      email,
      description,
      category,
      location,
      volunteer_needed,
      deadline,

      userName,
    };
    console.log(addPost);
    // send data to the server
    fetch("https://b9a11-server-side-abusayem99133.vercel.app/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="bg-orange-400">
      <Helmet>
        <title>AddVolunteer-Page</title>
      </Helmet>

      <div>
        <h2 className="text-3xl -mb-8 text-center ">Volunteer Post</h2>
      </div>
      <div
        className=" pt-10 
      hero min-h-screen "
      >
        <form onSubmit={handleAddPost} className="card-body items-center">
          <div className="flex mx-auto space-x-5 items-center   ">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="text"
                  placeholder="thumbnail"
                  name="thumbnail"
                  className="input input-bordered focus:outline-sky-600"
                  required
                />
              </div>

              <label className="block mt-4 mb-2 ">Category</label>
              <select
                name="category"
                id="category"
                className="w-full p-2 border rounded-md select-md focus:outline-sky-600"
                type="text"
                placeholder="Select Brand"
              >
                <option value="healthcare" selected>
                  Healthcare
                </option>
                <option value="education" selected>
                  Education
                </option>
                <option value="socialService" selected>
                  Social Service
                </option>
                <option value="animalWelfare" selected>
                  Animal Welfare
                </option>
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Volunteer Need</span>
                </label>
                <input
                  type="text"
                  placeholder="volunteer"
                  name="volunteer_needed"
                  className="input input-bordered focus:outline-sky-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="userEmail"
                  name="email"
                  className="input input-bordered"
                  readOnly
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Post Title"
                  name="post_title"
                  className="input input-bordered focus:outline-sky-600"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <DatePicker
                  className="input input-bordered input-md w-full max-w-xs  focus:outline-sky-600"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  name="deadline"
                />
                {/* 
              <input
                type="date"
                placeholder="deadline"
                className=""
                required
              /> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="location"
                  name="location"
                  className="input input-bordered focus:outline-sky-600"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="userName"
                  name="userName"
                  className="input input-bordered"
                  readOnly
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-center">Description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              name="description"
              className="input input-bordered focus:outline-sky-600"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerPost;
