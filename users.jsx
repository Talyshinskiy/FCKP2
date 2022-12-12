import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import User from "./user";
import BookMark from "./bookMark";
import api from "../api";

// import favourite from "../../assets/img/favourite.png";
// import notFavourite from "../assets/img/notFavourite.png";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // console.log(users.length);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleLike = (imdbID, bookmark) => {
    console.log(imdbID);
    console.log(bookmark);

    setUsers(
      users.map((user) => {
        if (user._id === imdbID) {
          console.log(bookmark);
          user.bookmark = !user.bookmark;
          console.log(bookmark);

          return {
            ...user,
          };
        }
        return user;
      })
    );
  };
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

  if (users.length === 0) {
    return (
      <div className="badge border-radius bg-danger">
        Никто с тобой не тусанет
      </div>
    );
  }
  return (
    <>
      <SearchStatus length={users.length} />
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

        {/* <User /> */}
        <tbody>
          {users.map((item) => (
            <tr key={item.id + item.name}>
              <th>{item.name}</th>
              <th>
                {item.qualities.map((item) => (
                  <span
                    className={"badge border-radius m1 bg-" + item.color}
                    key={item.id + item.name}
                  >
                    {item.name}
                  </span>
                ))}
              </th>
              <th>{item.profession.name}</th>
              <th>{item.completedMeetings}</th>
              <th>{item.rate} / 5</th>
              <th>
                <button
                  type="button"
                  className="btn btn btn-sm"
                  onClick={() => handleLike(item._id, item.bookmark)}
                >
                  <BookMark bookmark={item.bookmark} />

                  {/* <BookMark
                                      bookmark={item.bookmark}
                                  /> */}
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  // const getUser = users.map((user) => console.log(user));
};

export default Users;
