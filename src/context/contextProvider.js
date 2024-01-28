import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Appcontext = createContext();


const DataProvider = ({children}) => {
    // const [getData, setGetData] = useState([]);
    // const [getItem, setGetItem] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [loading1, setLoading1] = useState(false);
    // const [islogin, setIslogin] = useState(false);
  //  useEffect(() => {
  //   setLoading1(true)
  //     axios.get('http://localhost:4000/sign/userOne?category=mobile').then((res) => {
  //           setGetData(res.data)
            
  //           setLoading1(false)
  //         })
  //   }
 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // , [])
  // const singleItem = (url)=>{
  //   setLoading(true)
  //   axios.get(url).then((res) => {
  //     setGetItem(res.data)
     
  //     setLoading(false)
      
  //   })
  // }
  

   return( <Appcontext.Provider value={"g"}>{children}</Appcontext.Provider>)
}

export {Appcontext, DataProvider};