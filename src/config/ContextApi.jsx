import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext,  useState } from "react";
import { db } from "./Firebase";

export const AppContext = createContext();

const GlobalProvider = ({children}) => {
  // toogle add note on mobile to tablet veiw
  const [toggleAddNoteForm, setToggleAddNoteForm] = useState(false)
  const [user, setUser] = useState(null);
  // to set userID
  const [userID, setUserID] = useState(null);
  // to add all notes object
  const [notesList, setNotesList] = useState(null)

  // getting notes based on userID
  const getNotes = async (userId, filter = 'all') => {
    let notesCollection = collection(db, "users", userId, "notes");
    if (filter !== 'all') {
      notesCollection = query(notesCollection, where(filter, '==', true));
    }
    const noteSnapshot = await getDocs(notesCollection);
    const noteList = noteSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNotesList(noteList);
  };

  return (
    // make a globle context
    <AppContext.Provider value={{user, setUser,toggleAddNoteForm, setToggleAddNoteForm, userID, setUserID,notesList, setNotesList,getNotes}}>
      {children}
    </AppContext.Provider>
  );
}

export default GlobalProvider;
 
// make a hook for accessing value of global provider
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}
