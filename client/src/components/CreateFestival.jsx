import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DateRangePicker } from 'rsuite';

const CreateFestival = (props) => {
  const navigate = useNavigate();

  const [festival, setFestival] = useState({
    name: "",
    date: {
      start: "",
      end: ""
    },
    location: "",
    organizer: "",
    genre: "",
  });

  const onChange = (e) => {
    setFestival({ ...festival, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/festivals", festival)
      .then((res) => {
        setFestival({
          name: "",
          date: {
            start: "",
            end: ""
          },
          location: "",
          organizer: "",
          genre: "",
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateFestival!");
      });
  };
  return (
    <div className="createFestival">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Festival List
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Festival</h1>
            <p className="lead text-center">Create new festival</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Festival Name"
                  name="name"
                  className="form-control"
                  value={festival.name}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="form-control"
                  value={festival.location}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="organizer"
                  name="organizer"
                  className="form-control"
                  value={festival.organizer}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="genre"
                  name="genre"
                  className="form-control"
                  value={festival.genre}
                  onChange={onChange}
                />
              </div>
              <br /> 
              <div className="form-group">
                <DateRangePicker showOneCalendar 
                  value={festival.date}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFestival;