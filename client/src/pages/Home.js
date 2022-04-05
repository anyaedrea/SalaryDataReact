import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="job"
          onChange={handleChange}
          placeholder="job title"
        ></input>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="location"
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Home;
