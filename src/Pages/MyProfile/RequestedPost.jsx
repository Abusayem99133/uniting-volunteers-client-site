// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData } from "react-router-dom";

const RequestedPost = () => {
  const items = useLoaderData();
  console.log(items);
  // const {reqItems, setReqItems} = useState([])
  // useEffect(()=>{
  //   fetch('')
  // },[])
  return (
    <div>
      <Helmet>
        <title>RequestedPost-Page</title>
      </Helmet>
      <h1>Requested Post</h1>
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
            {items?.map((item, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{item.post_title}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{item.deadline}</td>

                {
                  <NavLink to={`/details/${item?._id}`}>
                    <button className="btn bg-purple-400 font-bold">
                      Cancel
                    </button>
                  </NavLink>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedPost;
