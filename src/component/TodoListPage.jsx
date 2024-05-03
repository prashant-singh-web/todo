import React from 'react'
import TodoListFilter from './TodoListFilter'
import TodoListItem from './TodoListItem'
import { auth } from '../config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function TodoListPage() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // After signOut, check if user is null
     
    
        navigate("/login");
      
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  
  return (
    <div className=" flex   flex-col w-full sm:w-[80%] md:w-3/4 mx-auto lg:w-full  lg:p-8 xl:p-16  ">
    <div className="w-full flex flex-row justify-between lg:hidden">
    <img src="./Group.png" alt="Logo" className="w-8" />
    <div className=" flex flex-row">
      <h2 className='text-sm text-black/80 my-auto'>hello,<span className='font-semibold ml-1'>{user?.displayName}</span></h2>
      <button onClick={()=>handleLogout()} className='text-xs hover:bg-red-600/70 font-semibold rounded-md text-white px-3 h-fit py-1 my-auto sm:py-3  bg-red-600 ml-3'>Log out</button>
    </div>
    </div>
    <div className="w-full flex flex-row justify-between mt-10">
    <h2 className="text-xl text-black/80 font-roboto font-bold">TODOLIST</h2>
    <div className=" hidden lg:flex flex-row">
      <h2 className='text-sm text-black/80 my-auto'>hello,<span className='font-semibold ml-1'>{user?.displayName}</span></h2>
      <button onClick={()=>handleLogout()} className='text-xs hover:bg-red-600/70 font-semibold rounded-md text-white px-3 bg-red-600 ml-3'>Log out</button>
    </div>
    </div>

    <TodoListFilter/>
    <TodoListItem/>
   
  </div>
  )
}

export default TodoListPage