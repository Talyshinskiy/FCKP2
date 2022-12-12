import React from "react";
// import { useState } from "react";
// import User from './componets/User'
// import Users from "..users/componets/users";
// import SearchStatus from "./componets/searchStatus.jsx";
// import api from "../api";

const User = (users) => {
  const user = users.map((user) => console.log(user));

  console.log(users);
  return;
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
