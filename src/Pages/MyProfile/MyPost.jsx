import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [myPost, setMyPost] = useState([]);
  const [myPostDelete, setMyPostDelete] = useState(false);

  useEffect(() => {
    fetch(
      `https://b9a11-server-side-abusayem99133.vercel.app/volunteering/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyPost(data);
      });
  }, [user, myPostDelete]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b9a11-server-side-abusayem99133.vercel.app/volunteerDelete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setMyPostDelete(true);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>MyPost-Page</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myPost?.map((post) => (
          <div key={post._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={post?.thumbnail} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <span>Title:</span>
                  {post?.post_title}
                </h2>
                <p>
                  <span className="font-bold">Category: </span>
                  {post?.category}
                </p>
                <p>
                  <span className="font-bold">Location: </span>
                  {post?.location}
                </p>
                <div className="card-actions justify-center">
                  <Link to={`/updated/${post?._id}`}>
                    <button className="btn btn-primary">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(post?._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
