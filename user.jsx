import React from "react";
import BookMark from "./bookMark";
import QualitiesList from "./qualitiesList";
// import { useState } from "react";
// import User from './componets/User'
import Users from "./users";
// import SearchStatus from "./componets/searchStatus.jsx";
// import api from "../api";

const User = ({ user, onDelete, onLike }) => {
  // const user = users.map((user) => console.log(user));

  // console.log("users.users", users);

  return (
    <tr key={user.id + user.name}>
      <th>{user.name}</th>

      <th>
        {/* {user.qualities.map((item) => (
          
        ))} */}
        <QualitiesList
          key={user.id}
          id={user.id}
          name={user.name}
          color={user.color}
          qualities={user.qualities}
        />
      </th>
      <th>{user.profession.name}</th>
      <th>{user.completedMeetings}</th>
      <th>{user.rate} / 5</th>
      <th>
        <button
          type="button"
          className="btn btn btn-sm"
          onClick={() => onLike(user._id, user.bookmark)}
        >
          <BookMark bookmark={user.bookmark} />
        </button>
      </th>
      <th>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );

  // (
  // <tbody>
  //   {users.map((item) => (
  //     <tr key={item.id + item.name}>
  //       <th>{item.name}</th>
  //       <th>
  //         {item.qualities.map((item) => (
  //           <span
  //             className={"badge border-radius m1 bg-" + item.color}
  //             key={item.id + item.name}
  //           >
  //             {item.name}
  //           </span>
  //         ))}
  //       </th>
  //       <th>{item.profession.name}</th>
  //       <th>{item.completedMeetings}</th>
  //       <th>{item.rate} / 5</th>
  //       <th>
  //         <button
  //           type="button"
  //           className="btn btn btn-sm"
  //           // onClick={() => handleLike(item._id)}
  //         >
  //           {/* <BookMark
  //                                     bookmark={item.bookmark}
  //                                 /> */}
  //         </button>

  //         {/*
  //                             <BookMark
  //                                 bookMark={users.bookMark}
  //                                 id={item._id}
  //                             /> */}
  //       </th>
  //       <th>
  //         <button
  //           type="button"
  //           className="btn btn-danger btn-sm"
  //           // onClick={() => handleDelete(item._id)}
  //         >
  //           Delete
  //         </button>
  //       </th>
  //     </tr>
  //   ))}
  // </tbody>
  // );
};

export default User;

// (

// );
