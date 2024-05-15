import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
const BeVolunteer = () => {
  const { user } = useContext(AuthContext);
  const beVolunteer = useLoaderData();
  const {
    thumbnail,
    post_title,
    description,
    category,
    location,

    volunteer_needed,
    deadline,
  } = beVolunteer;
  const [startDate, setStartDate] = useState(new Date());
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const thumbnail = form.get("thumbnail");
    const post_title = form.get("post_title");
    const email = user.email;
    const description = form.get("description");
    const category = form.get("category");
    const location = form.get("location");
    const volunteer_needed = form.get("volunteer_needed");
    const userName = user.userName;
    const deadline = form.get("deadline");
    const suggestion = form.get("suggestion");
    const status = form.get("status");
    const requestedPost = {
      thumbnail,
      post_title,
      description,
      category,
      location,
      email,
      userName,
      volunteer_needed,
      deadline,
      suggestion,
      status,
    };
    console.log(requestedPost);
    // send data to the server
    fetch(
      "https://b9a11-server-side-abusayem99133.vercel.app/requestedVolunteer",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestedPost),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Requested Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="bg-orange-400">
      <Helmet>
        <title>BeVolunteer-Page</title>
      </Helmet>
      <div>
        <h1 className="text-center  -mb-6 text-3xl text-white p-3">
          BeVolunteer Requested
        </h1>
      </div>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="flex mx-auto space-x-5">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="text"
                placeholder="thumbnail"
                name="thumbnail"
                defaultValue={thumbnail}
                className="input input-bordered focus:outline-sky-600"
              />
            </div>

            <div>
              {" "}
              <label className="block mt-4 mb-2 ">Category</label>
              <select
                name="category"
                defaultValue={category}
                id="category"
                className="w-full p-2 border rounded-md focus:outline-sky-600"
                type="text"
                readOnly
                placeholder="Select Brand"
              >
                <option readOnly value="healthcare" selected>
                  Healthcare
                </option>
                <option readOnly value="education" selected>
                  Education
                </option>
                <option readOnly value="socialService" selected>
                  Social Service
                </option>
                <option readOnly value="animalWelfare" selected>
                  Animal Welfare
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Volunteer Need</span>
              </label>
              <input
                type="text"
                placeholder="volunteer"
                name="volunteer_needed"
                defaultValue={volunteer_needed}
                className="input 
                input-bordered focus:outline-sky-600"
                required
                readOnly
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
                defaultValue={user?.email}
                className="input input-bordered focus:outline-sky-600"
                readOnly
                required
              />
            </div>
            <div>
              <label className="label">
                {" "}
                <span className="label-text">Status</span>
              </label>
              <input
                className="input input-bordered focus:outline-sky-500"
                type="text"
                name="status"
                placeholder="Requested"
                required
              />
            </div>
          </div>
          {/* right */}
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                placeholder="Post Title"
                name="post_title"
                defaultValue={post_title}
                className="input input-bordered focus:outline-sky-600"
                required
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span defaultValue={deadline} className="label-text">
                  Deadline
                </span>
              </label>
              <DatePicker
                className="input input-bordered input-md w-full max-w-xs  focus:outline-sky-600"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="deadline"
                defaultValue={deadline}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="location"
                name="location"
                defaultValue={location}
                className="input input-bordered focus:outline-sky-600"
                required
                readOnly
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
                defaultValue={user?.displayName}
                className="input input-bordered focus:outline-sky-600"
                readOnly
                required
              />
            </div>
            <div>
              <label className="label">
                {" "}
                <span className="label-text">Suggestion</span>
              </label>
              <input
                className="input-bordered input focus:outline-sky-500"
                type="text"
                placeholder="Your Suggestion"
                name="suggestion"
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
            defaultValue={description}
            className="input input-bordered focus:outline-sky-600"
            required
            readOnly
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Request</button>
        </div>
      </form>
    </div>
  );
};

export default BeVolunteer;
