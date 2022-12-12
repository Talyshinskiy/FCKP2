import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import User from "./user";
import BookMark from "./bookMark";
import api from "../api";

// import favourite from "../../assets/img/favourite.png";
// import notFavourite from "../assets/img/notFavourite.png";

const Users = ({ usersList, onDelete, onLike }) => {
  console.log("props", usersList);

  // const [users, setUsers] = useState(api.users.fetchAll());
  // console.log(users.length);

  // (user) => {
  //   return user.map((user) => {
  //     if (user.imdbID === imdbID) {
  //       return {
  //         ...user,
  //         bookmark: !user.bookmark,
  //       };
  //     }
  //     return user;
  //   });
  // }

  if (usersList.length === 0) {
    return (
      <div className="badge border-radius bg-danger">
        Никто с тобой не тусанет
      </div>
    );
  }
  return (
    <div>
      <SearchStatus length={usersList.length} />
      {/* {user.length>0&& } */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Завершенные встречи</th>
            <th>Оценка</th>
            <th>Избранное</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((item) => (
            <User
              key={item._id}
              user={item}
              onDelete={onDelete}
              onLike={onLike}
            />
          ))}
        </tbody>
      </table>
    </div>
  );

  // const getUser = users.map((user) => console.log(user));
};

export default Users;
