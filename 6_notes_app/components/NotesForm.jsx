"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const NotesForm = ({ notes }) => {
  const [yourNotes, setYourNotes] = useState(notes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const createNote = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      const result = await response.json();
      if (result.success) {
        setYourNotes([result.data, ...yourNotes]);
        toast.success("Notes created successfully");
      }
      setLoading(false);
      setContent("");
      setTitle("");
    } catch (error) {
      console.error(error);
      toast.error("Something gone wrong");
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (result.success) {
        setYourNotes((prev) => prev.filter((item) => item._id !== id));
        toast.success("Notes Deleted");
      }
      if (result.success === false) {
        console.log(result.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const startEdit = (note) => {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const updateNote = async (id) => {
    if (!editContent.trim() || !editTitle.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editTitle, content: editContent }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Notes updated");
        setYourNotes((prev) =>
          prev.map((note) => (note._id === id ? result.data : note)),
        );
        setEditingId(null);
        setEditTitle("");
        setEditContent("");
        
      }
    } catch (error) {
      console.log("Error updating");
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto p-4 border border-gray-700 rounded-lg mt-5">
      <form onSubmit={createNote} className="space-y-2">
        <h1 className="text-center text-lg font-mono">Create new notes</h1>
        <input
          type="text"
          className="w-full border border-gray-600 rounded-lg p-1 pl-5"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

      <div>
        <h1 className="text-center text-lg font-mono mt-5">
          Your Notes({yourNotes.length}){" "}
        </h1>
        {yourNotes.length === 0 ? (
          <p>No Notes yet.Create your first note above</p>
        ) : (
          yourNotes.map((note) => (
            <div
              key={note._id}
              className="border border-gray-600 rounded-lg p-3 mb-3"
            >
              {editingId === note._id ? (
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateNote(note._id);
                    }}
                    className="space-y-2"
                  >
                    <input
                      type="text"
                      className="w-full border border-gray-600 rounded-lg p-1 pl-5"
                      placeholder="Title..."
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      required
                    />

                    <textarea
                      className="w-full border border-gray-600 rounded-lg p-1 pl-5 "
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      placeholder="Notes...."
                      rows={4}
                      required
                    />
                    <div className="flex justify-center gap-3">
                      {" "}
                      <button
                        type="Submit"
                        disabled={loading}
                        className="w-1/3 bg-blue-400  hover:bg-blue-500 transition-colors rounded-lg text-white py-1 font-mono"
                      >
                        {loading ? "updating notes" : "update Notes"}
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="w-1/3 bg-blue-400  hover:bg-blue-500 transition-colors rounded-lg text-white py-1 font-mono"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <h2 className=" text-lg font-semibold">{note.title}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(note)}
                        className="text-blue-400 text-sm hover:text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteNote(note._id)}
                        className="text-red-400 text-sm hover:text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p>{note.content}</p>
                  <div className="flex justify-end-safe gap-2 text-sm text-gray-400">
                    <p>
                      Created: {new Date(note.createdAt).toLocaleDateString()}
                    </p>
                    <p>
                      Updated: {new Date(note.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesForm;
