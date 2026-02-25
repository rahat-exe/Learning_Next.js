"use client";
import { deleteUser, updateUser } from "@/actions";
import React, { useState } from "react";

const UserList = ({ user: { id, name, email, age } }) => {
  const [update, setUpdate] = useState(false);
  const handleSubmit = async () => {
    await deleteUser(id);
  };

  const handleUpdate = async () => {
    setUpdate(true);
  };
  const updateUserFn = async (formData)=>{
    await updateUser(id, formData)
    setUpdate(false)
    
  }

  return (
    <div>
      <h1>name: {name}</h1>
      <h2>
        {email} {age}
      </h2>
      <button onClick={handleUpdate}>update</button>

      <button onClick={handleSubmit}>Delete</button>
      {update && (
        <form action={updateUserFn}>
          <input name="name" defaultValue={name} />
          <input name="email" defaultValue={email} />
          <input name="age" defaultValue={age} />
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default UserList;
