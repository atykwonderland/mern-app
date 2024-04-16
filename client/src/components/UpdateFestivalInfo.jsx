import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateFestivalInfo(props) {
  const [festival, setFestival] = useState({
    name: "",
    date_start: "",
    date_end: "",
    location: "",
    organizer: "",
    genre: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/festivals/${id}`)
      .then((res) => {
        setFestival({
          name: res.data.name,
          date_start: res.data.date_start,
          date_end: res.data.date_end,
          location: res.data.location,
          organizer: res.data.organizer,
          genre: res.data.genre,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateFestivalInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setFestival({ ...festival, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: festival.name,
      date_start: festival.date_start,
      date_end: festival.date_end,
      location: festival.location,
      organizer: festival.organizer,
      genre: festival.genre,
    };

    axios
      .put(`http://localhost:8082/api/festivals/${id}`, data)
      .then((res) => {
        navigate(`/festivals/details/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateFestivalInfo!');
      });
  };

  return (
    <div className='UpdateFestivalInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/festivals' className='btn btn-outline-warning float-left'>
              Show Festival List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Festival</h1>
            <p className='lead text-center'>Update Festival's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Festival Name'
                name='name'
                className='form-control'
                value={festival.name}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='date_start'>Start Date</label>
              <input
                type='date'
                placeholder='Start Date'
                name='date_start'
                className='form-control'
                value={festival.date_start}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='date_end'>End Date</label>
              <input
                type='date'
                placeholder='End Date'
                name='date_end'
                className='form-control'
                value={festival.date_end}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                placeholder='Location'
                name='location'
                className='form-control'
                value={festival.location}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='organizer'>Organizer</label>
              <input
                type='text'
                placeholder='Organizer'
                name='organizer'
                className='form-control'
                value={festival.organizer}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='genre'>Genre</label>
              <input
                type='text'
                placeholder='Genre of the Festival'
                name='genre'
                className='form-control'
                value={festival.genre}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Festival
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateFestivalInfo;