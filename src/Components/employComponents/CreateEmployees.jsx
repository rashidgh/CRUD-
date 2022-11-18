import React, { useState } from 'react'
import axiosInstance from '../../pages/AxiosInstance';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CreateEmployees = () => {
  let navigate = useNavigate();//redirection
  let [state, setState] = useState({
    emp_name: "",
    emp_salary: "",
    emp_designation: "",
    gender :"",
  })
  let { emp_name, emp_salary, emp_designation, gender } = state;
  let handleChange =e=>{
    let {name,value}=e.target;
    setState({...state,[name]:value});
  }
  let handleSubmit = async e=>{
    e.preventDefault();
    try {
      let payload = { emp_name, emp_salary, emp_designation, gender };
      await axiosInstance.post("/employees", payload);
      toast.success("sucessfully employee created");
      // navigate("/")
      window.location.assign("/")
      
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <section className="formBlock">
      <article>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emp_name">Employee name</label>
            <input
              type="text"
              className="form-control"
              name="emp_name"
              value={emp_name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_name">Employee Salary</label>
            <input
              type="text"
              className="form-control"
              name="emp_salary"
              value={emp_salary}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_designation">Employee Designation</label>
            <select
              name="emp_designation"
              value={emp_designation}
              onChange={handleChange}
            >
              <option value="java_dev">Java Developer</option>
              <option value="node_dev">Nodejs Developer</option>
              <option value="frontend_dev">FrontEnd Developer</option>
              <option value="api_dev">Api Developer</option>
            </select>
          </div>
          <div
            className="form-group"
            name="genger"
            value={gender}
            onChange={handleChange}
          >
            <input type="radio" name="gender" value="male" />
            Male
            <input type="radio" name="gender" value="female" />
            Female
            <input type="radio" name="gender" value="others" />
            Others
          </div>
          <div className="form-group">
            <button>Add Employee</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default CreateEmployees;
