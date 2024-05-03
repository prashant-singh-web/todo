import React, { useEffect } from "react";
import "./css/HomePage.css";
import TodoListPage from "./TodoListPage";

import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGlobalContext } from "../config/ContextApi";
import AddTodoPage from "./AddTodoPage";
import { TiPlus } from "react-icons/ti";

function HomePage() {
  const [user] = useAuthState(auth);

  const { setUserID,setToggleAddNoteForm } = useGlobalContext();
  useEffect(() => {
    if (user != null) {
      setUserID(user.uid);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="w-full h- overflow-hidden bg-white ">
      <div className="main mx-auto my-auto w-full 2xl:max-h-[1024px] xl:max-w-full 2xl:max-w-[1600px] relative z-30">
      <AddTodoPage />
      <TodoListPage />
      
    </div>
    <button onClick={()=>setToggleAddNoteForm(true)} className="absolute  z-20  px-6 sm:px-10 sm:py-5 hover:bg-gray-50 duration-200 ease-linear right-6 bottom-8 sm:bottom-12 sm:right-9 flex lg:hidden bg-white rounded-md hover:scale-95 py-4 shadow text-sm font-semibold text-black/80 ">
    Add <TiPlus className='my-auto ml-2'/>
    </button>
    </div>
  );
}

export default HomePage;
