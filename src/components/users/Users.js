import React from "react";
import UserItem from "./UserItem";

const Users = ({ users, loading }) => {
    return (
      <div style={userGrid}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
}

const userGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
