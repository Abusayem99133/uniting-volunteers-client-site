const AddVolunteerPost = () => {
  return (
    <div>
      <form className="card-body">
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
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="category"
                name="category"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Volunteer Need</span>
              </label>
              <input
                type="text"
                placeholder="volunteer"
                name="volunteer"
                className="input input-bordered"
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
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="text"
                placeholder="thumbnail"
                name="thumbnail"
                className="input input-bordered"
                required
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                placeholder="Post-Title"
                name="Post-Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="deadline"
                placeholder="deadline"
                className="input input-bordered"
                required
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
                className="input input-bordered"
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
            className="input input-bordered"
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
