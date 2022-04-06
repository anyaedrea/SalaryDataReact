import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./home.css";

function Home() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ job: "", location: "" });
  //   const [searchParams, setSeachParams] = useSearchParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { job, location } = formData;
    navigate(`/result/${job}/${location}`);
  };

  return (
    <div className="home-container">
      <h1>Are you being underpaid?</h1>
      <form onSubmit={handleSearch} className="search-form">
        <div className="row .no-gutters">
          <input
            type="text"
            name="job"
            onChange={handleChange}
            placeholder="job title"
            className="form-control form-control-lg col-12 col-md"
          ></input>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            placeholder="location"
            className="form-control form-control-lg col-12 col-md"
          ></input>
          <button className="btn btn-primary col-12 col-md-auto">
            Check salary
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
