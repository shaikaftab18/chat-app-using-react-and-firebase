import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./addUser.css";
import { db } from "../../../../lib/firebase";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const username = formdata.get("username");

    try {
      const UserRef = collection(db, "users");
      const q = query(UserRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="Avatar" />
            <span>{user.username}</span>
          </div>
          <button>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;