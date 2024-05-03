import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useGlobalContext } from "../config/ContextApi";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/Firebase";

function TodoListFilter() {
  const [toggleFilterDropdown, setToggleFilterDropdown] = useState(false);
  const { getNotes, userID, setNotesList } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState(""); // Add this line
  const getNotesBySearch = async (userId, searchTerm = "") => {
    let notesCollection = collection(db, "users", userId, "notes");

    // If a search term is provided, adjust the query to filter by title
    if (searchTerm !== "") {
      notesCollection = query(
        notesCollection,
        where("title", "==", searchTerm)
      );
    }

    const noteSnapshot = await getDocs(notesCollection);
    const noteList = noteSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setNotesList(noteList);
  };
  return (
    <main className="w-full h-40  my-8">
      <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between w-full h-fit">
        <div className="flex flex-row h-full border rounded-sm border-[#D9D9D9] overflow-hidden ">
          <input
            type="text"
            value={searchTerm} // Add this line
            onChange={(e) => setSearchTerm(e.target.value)} // And this line
            placeholder="Search"
            className="text-sm p-2 w-full   outline-none font-normal font-roboto text-black/80  placeholder:text-black/80"
          />
          <button onClick={() => getNotesBySearch(userID, searchTerm)} className="p-2  w-fit  grid place-items-center my-auto sm:px-5 h-full hover:bg-gray-200">
            <IoMdSearch className=" text-xl text-black/80  my-auto " />
          </button>
        </div>
        <div className="relative w-full sm:w-fit h-full">
          <button
            onClick={() => setToggleFilterDropdown(true)}
            className="text-sm py-2 w-full text-black/80 flex flex-row justify-between px-2 border rounded-sm border-[#D9D9D9] "
          >
            Filter By <IoIosArrowDown className="my-auto  ml-20" />
          </button>
          <div
            onClick={() => setToggleFilterDropdown(false)}
            className={`absolute ${
              toggleFilterDropdown ? "" : "hidden"
            } rounded-md before:p-2 before:absolute before:bg-white before:-top-1 before:left-3 before:rotate-45 top-10 z-30  sm:top-[34px] sm:left-2 w-full sm:w-32 shadow-[0px_9px_28px_8px_#0000000D,0px_6px_16px_0px_#00000014,0px_3px_6px_-4px_#0000001F]  bg-white`}
          >
            <div className="w-full flex flex-col  mt-2 relative z-10">
              <button
                onClick={() => getNotes(userID, "all")}
                className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100"
              >
                All
              </button>
              <button
                onClick={() => getNotes(userID, "completed")}
                className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100"
              >
                Completed
              </button>
              <button
                onClick={() => getNotes(userID, "favourite")}
                className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100"
              >
                Favourites
              </button>
              <button
                onClick={() => getNotes(userID, "deleted")}
                className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100"
              >
                Deleted
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TodoListFilter;
