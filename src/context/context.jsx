import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Context = createContext();
export const API= `https://api.tvmaze.com/search/shows?q=all`;
export const API2= ` https://api.tvmaze.com/shows`;

export default function AppProvider({children}) {
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchShowsList = async ()=>{
    const {data} = await axios.get(`${API}`);
    setShowList(data);
    setLoading(false)
  }
 

  useEffect(() => {
    fetchShowsList();
  }, [])

  return (
    <Context.Provider value={{setShowList, showList,setLoading, loading }}>
      {children}
    </Context.Provider>
  )
}

