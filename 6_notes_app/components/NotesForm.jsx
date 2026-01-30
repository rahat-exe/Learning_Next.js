"use client";
import React, { useState } from "react";

const NotesForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const createNote = async (e) => {
    e.preventDefault();

    if(!title.trim() || !content.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/notes', {
        method:"POST",
        headers:{
          "COntent-Type":"application/json"
        },
        body:JSON.stringify({title, content})
      })
      const result = await response.json()
      console.log(result)
      setLoading(false)
      setContent('')
      setTitle('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mx-auto p-4 border border-gray-700 rounded-lg mt-5">
      <form onSubmit={createNote} className="space-y-2">
        <h1 className="text-center text-lg font-mono">Create new notes</h1>
        <input
          type="text"
          className="w-full border border-gray-600 rounded-lg p-1 pl-5"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle( e.target.value)}
          required
        />

        <textarea
          className="w-full border border-gray-600 rounded-lg p-1 pl-5 "
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Notes...."
          rows={4}
          required
        />
        <div className="flex justify-center">
          {" "}
          <button
            type="Submit"
            disabled={loading}
            className="w-1/2 bg-blue-400  hover:bg-blue-500 transition-colors rounded-lg text-white py-1 font-mono"
          >
            {loading ? "Creating notes" : "Add Notes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotesForm;
