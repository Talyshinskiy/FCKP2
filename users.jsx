import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import { paginate } from "../utils/paginate";
import User from "./user";
import Pagination from "./pagination";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, onLike }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  if (count === 0) {
    return (
      <div className="badge border-radius bg-danger">
        Никто с тобой не тусанет
      </div>
    );
  }
  return (
    <>
      <div>
        <SearchStatus length={users.length} />
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
            {userCrop.map((item) => (
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
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired
};

export default Users;
