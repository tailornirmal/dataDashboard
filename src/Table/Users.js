import { useState } from "react";
import UsersList from "./UsersList.json";
import "./Table.css";

export default function Users() {
  let [users, setUsers] = useState(UsersList.users || []);

  console.log(users);
  return (
    <div className="container">
      <h2>Users List</h2>
      <section>
        {users.map((user, i) => {
          return (
            <div className="row">
              <span className="cell">
                <img className="image-style" alt="userimage" src={user.image} />
              </span>
              <span className="cell">{user.firstName}</span>
              <span className="cell">{user.lastName}</span>
              <span className="cell">{user.email}</span>
              <span className="cell">{user.domain}</span>
              <span className="cell">{user.phone}</span>
              <span className="cell">{user.gender}</span>
              <span className="cell">{user.university}</span>
              <span className="cell">
                <div className="action-buttons">
                  <span className="action-button-element">View</span>
                  <span className="action-button-element">Edit</span>
                  <span className="action-button-element">Delete</span>
                </div>
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
