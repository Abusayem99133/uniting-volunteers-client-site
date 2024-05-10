import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
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
  };
  return (
    <div>
      <form onSubmit={handleAddPost} className="card-body">
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
                className="input input-bordered focus:outline-sky-600"
                required
              />
            </div>

            <label className="block mt-4 mb-2 ">Category</label>
            <select
              name="category"
              id="category"
              className="w-full p-2 border rounded-md focus:outline-sky-600"
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
              <DatePicker
                className=" input-bordered"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="deadline"
              />
              {/* <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="deadline"
                placeholder="deadline"
                className="input input-bordered focus:outline-sky-600"
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
  );
};

export default AddVolunteerPost;
