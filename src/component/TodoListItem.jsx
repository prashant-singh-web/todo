import { doc, runTransaction } from "firebase/firestore";
import React, { useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { db } from "../config/Firebase";
import { useGlobalContext } from "../config/ContextApi";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// import EachNoteList from './EachNoteList';

function TodoListItem() {
  // use navigate to navigate user to /login page if he is not logged in
  const navigate = useNavigate();

  const { userID, notesList, getNotes } = useGlobalContext();
  // check if user is logged in or navigated to /login page
  useEffect(() => {
    if (userID != null) {
      getNotes(userID);
    } else {
      navigate("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ userID]);

  // update each note based on their note id under user to set filter value
  const updateNoteToggle = async (noteId, field) => {
    // getting note doc based on their id
    const noteRef = doc(db, "users", userID, "notes", noteId);
  
    await runTransaction(db, async (transaction) => {
      const noteSnap = await transaction.get(noteRef);
      if (!noteSnap.exists()) {
        toast.error("doc not found")
      }
  
      // toggle todo field like completed, favorite or deleted
      const newValue = !noteSnap.data()[field];
      transaction.update(noteRef, { [field]: newValue });
    });
  
    getNotes(userID); // Refresh the notes list
  };
  

  return (
    <div className="w-full flex flex-col ">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="w-full my-5 text-center text-xl font-bold text-black/80">
        {notesList?.length >= 1
          ? `Todos(${notesList.length})`
          : "Todos not found"}
      </h2>
      <div className="w-full ">
        {notesList &&
          notesList.map((note, ind) => {
            return (
              <div
                key={ind}
                className="w-full border-b-2 flex flex-row justify-between p-2"
              >
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-black/80">
                    {note?.title}
                  </h2>
                  <p className="text-sm text-black/80">{note?.description}</p>
                </div>
                <div className="relative w-fit h-fit hover:bg-gray-100 p-1 rounded-full group hover:cursor-pointer">
                  <HiOutlineDotsVertical />
                  <div
                    className={`absolute hidden group-hover:block z-50 rounded-md before:p-2 before:absolute before:bg-white before:-top-1 before:left-5 before:rotate-45  top-[27px] -left-4 w-32 shadow-[0px_9px_28px_8px_#0000000D,0px_6px_16px_0px_#00000014,0px_3px_6px_-4px_#0000001F]  bg-white`}
                  >
                    <div className="w-full flex flex-col  mt-2 relative z-10">
                      <button
                        onClick={() => updateNoteToggle(note.id, "completed")}
                        className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100 "
                      >
                        {note.completed ? "Completed" : "Uncompleted"}
                      </button>
                      <button
                        onClick={() => updateNoteToggle(note.id, "favourite")}
                        className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100"
                      >
                        {note.favourite ? "Favourite" : "Add Favourite"}
                      </button>
                      <button
                        onClick={() => updateNoteToggle(note.id, "deleted")}
                        className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100"
                      >
                        {note.deleted ? "Restore" : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoListItem;
