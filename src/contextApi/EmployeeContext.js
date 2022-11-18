import React, { createContext,useEffect,useState } from "react";
// import {toast} from "react-toastify"
import axiosInstance from "../pages/AxiosInstance";
export let EmployeeContextApi = createContext();
const EmployeeProvider = ({ children }) => {
    let [employees, setEmployees] = useState([]);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        let fetchData = async () => {
            try {
              let { data } = await axiosInstance.get("/employees");
              setLoading(true);
              setEmployees(data);
            } catch (error) {
            //   toast.error(error);
            }
            setLoading(false);
        }
        
        fetchData();
    }, []);
    return (
      <EmployeeContextApi.Provider value={{ employees ,loading}}>
        {children}
      </EmployeeContextApi.Provider>
    );
}
export default EmployeeProvider;