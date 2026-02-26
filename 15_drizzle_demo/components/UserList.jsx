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
    <div className="p-4 border border-gray-600 rounded-xl mb-2">
      <h1 className="font-medium">
        Name: <span>{name}</span>
      </h1>
      <h2 className="font-medium">Age: {age}</h2>
      <h2 className="font-medium">Email: {email}</h2>
      <div className=" flex gap-3 mt-2">
        <button onClick={handleUpdate} className="border border-gray-700 p-1 rounded-xl hover:border-2">update</button>
        <button onClick={handleSubmit}className="border border-gray-700 p-1 rounded-xl hover:border-2">Delete</button>
      </div>
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
