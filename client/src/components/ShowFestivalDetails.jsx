import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowFestivalDetails(props) {
  const [festival, setFestival] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/festivals/${id}`)
      .then((res) => {
        setFestival(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFestivalDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/festivals/${id}`)
      .then((res) => {
        navigate('/festivals');
      })
      .catch((err) => {
        console.log('Error form ShowFestivalDetails_deleteClick');
      });
  };

  const FestivalItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'></th>
            <td>Name</td>
            <td>{festival.name}</td>
          </tr>
          <tr>
            <th scope='row'></th>
            <td>Date</td>
            <td>[{festival.date[0]}, {festival.date[1]}]</td>
          </tr>
          <tr>
            <th scope='row'></th>
            <td>Location</td>
            <td>{festival.location}</td>
          </tr>
          <tr>
            <th scope='row'></th>
            <td>Organizer</td>
            <td>{festival.organizer}</td>
          </tr>
          <tr>
            <th scope='row'></th>
            <td>Genre</td>
            <td>{festival.genre}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowFestivalDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/festivals' className='btn btn-outline-warning float-left'>
              Show Festival List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Festival Record</h1>
            <p className='lead text-center'>View Festival Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{FestivalItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(festival._id);
              }}
            >
              Delete Festival
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/festivals/update/${festival._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Festival
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowFestivalDetails;