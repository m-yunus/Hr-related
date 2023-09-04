import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BaseUrl } from "../ApiService/ApiService";

const DataContext=createContext();

export function useDataContext() {
  return useContext(DataContext);
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [progresValue,setProgressvalue]=useState(0);
  console.log(progresValue);
const user=localStorage.getItem('userName');

  const getAllData = async () => {
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.get(`${BaseUrl}/api/personalize/getAllData`,{headers});
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(()=>{
   getAllData()

    },[data])
    console.log(data)
    return (
      <DataContext.Provider  value={{data,user,setProgressvalue,progresValue}}>
        {children}
      </DataContext.Provider>
    );
}