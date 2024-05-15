import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
const UpdatedPost = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [updatedPost, setUpdatedPost] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/singleVolunteer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedPost(data);
        console.log(data);
      });
  }, [id]);
  console.log(updatedPost);
  const handleUpdatedPost = (event) => {
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
    const updatedPost = {
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
    console.log(updatedPost);
    // send data to the server
    fetch(`http://localhost:5000/updateVolunteer/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Post Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleUpdatedPost} className="card-body">
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
                  defaultValue={updatedPost?.thumbnail}
                  required
                />
              </div>

              <label className="block mt-4 mb-2 ">Category</label>
              <select
                name="category"
                id="category"
                className="w-full p-2 border rounded-md select-md focus:outline-sky-600"
                type="text"
                defaultValue={updatedPost?.category}
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
                  defaultValue={updatedPost?.volunteer_needed}
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
                  defaultValue={updatedPost?.email}
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
                  defaultValue={updatedPost?.post_title}
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
                  defaultValue={updatedPost?.deadline}
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
                  defaultValue={updatedPost?.location}
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
                  defaultValue={updatedPost?.userName}
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
              defaultValue={updatedPost?.description}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Updated</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedPost;
