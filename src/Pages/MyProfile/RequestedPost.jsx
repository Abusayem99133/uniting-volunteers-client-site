// import { useEffect, useState } from "react";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const RequestedPost = () => {
  // const items = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myPost, setMyPost] = useState([]);
  const [myPostDelete, setMyPostDelete] = useState(false);

  useEffect(() => {
    fetch(
      `https://b9a11-server-side-abusayem99133.vercel.app/reqVolunteering/${user?.email}`
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
        <title>RequestedPost-Page</title>
      </Helmet>

      <div className=" overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>

              <th>UserEmail</th>

              <th>Status</th>
              <th>Deadline</th>
              <th>ReqStatus</th>
            </tr>
          </thead>
          <tbody>
            {myPost?.map((item, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{item.post_title}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{item.deadline}</td>

                <button
                  onClick={() => handleDelete(item?._id)}
                  className="btn bg-purple-400 font-bold"
                >
                  Cancel
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedPost;
