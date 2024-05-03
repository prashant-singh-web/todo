import React, { useState } from "react";
import { useGlobalContext } from "../config/ContextApi";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/Firebase";
import toast, { Toaster } from "react-hot-toast";
import { TiPlus } from "react-icons/ti";

function AddTodoPage() {
  // for notes title and description
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  // getting state from global state object
  const { userID, toggleAddNoteForm, setToggleAddNoteForm, getNotes } =
    useGlobalContext();

  const handleAddNote = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    // make sure the input field is not empty
    if (userID != null && noteTitle !== "" && noteDescription !== "") {
      addNote(userID, noteTitle, noteDescription);
      setNoteDescription("");
      setNoteTitle("");
    } else {
      toast.error("User ID, title and description must be filled");
    }
  };
  // add note under user
  const addNote = async (userId, noteTitle, noteDescription) => {
    try {
      await addDoc(collection(db, "users", userId, "notes"), {
        title: noteTitle,
        description: noteDescription,
      });
      //  after adding note, update noteslist
      getNotes(userId);
      toast.success("Note added successfully");
    } catch (e) {
      console.error("Error adding note: ", e);
      toast.error("Error adding note");
    }
  };

  return (
    <div
      className={`absolute  z-50 lg:static   ${
        toggleAddNoteForm ? "inset-0 h-[100vh] p-4 sm:p-10" : "h-0 overflow-hidden  lg:h-fit"
      } transition-all ease-linear duration-300 bg-white z-40 lg:flex flex-col lg:p-8  border-r-2`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full flex flex-row justify-between lg:mr-auto">
        <img src="./Group.png" alt="Logo" className="w-8" />
        <button onClick={() => setToggleAddNoteForm(false)}>
          <TiPlus className="my-auto ml-2 rotate-45 text-xl lg:hidden" />
        </button>
      </div>
      <div className="w-full mt-20 sm:w-3/4 sm:mt-40 lg:w-full mx-auto flex flex-col justify-center  items-center ">
        <h2 className="text-2xl leading-[38.84px] font-bold text-black/85  font-roboto">
          TODO
        </h2>
        <p className="text-base mb-5 leading-[30px] font-roboto text-center font-normal text-black/50  overflow-auto">
          Welcome to <strong>Todo</strong>! 📝 <br />
          This is your one-stop solution for managing your tasks and notes. With
          our app, you can not only add notes but also categorize them based on
          your preferences.
          <br /> Enter your todo below input and save now :)
        </p>
        <form
          onSubmit={handleAddNote}
          className="w-full flex flex-col px-10 justify-center items-center space-y-5"
        >
          <input
            type="text"
            placeholder="Title"
            className="form-input"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="form-input"
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 text-base font-semibold text-white text-center bg-[#597EF7] rounded-sm border border-[#1890FF]"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodoPage;
