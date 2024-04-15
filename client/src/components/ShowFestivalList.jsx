import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FestivalCard from './FestivalCard';

function ShowFestivalList() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/festivals')
      .then((res) => {
        setFestivals(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFestivalsList');
      });
  }, []);

  const festivalList =
    festivals.length === 0
      ? 'there is no festival record!'
      : festivals.map((festival, k) => <FestivalCard festival={festival} key={k} />);

  const onButtonClick = () => {
    navigate("/festivals/create")
  }

  return (
    <div className='ShowFestivalsList'>
      <div className='container'>
        <div className='row'>
          <div className='titleContainer'>
            <br />
            <h2 className='display-4 text-center'>Festivals List</h2>
          </div>

          <div className='col-md-11'>
            <div className={"festivalButtonContainer"}>
              <input
                  className={"festivalInputButton"}
                  type="button"
                  onClick={onButtonClick}
                  value={"+ Add New Festival"} />
            </div>
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{festivalList}</div>
      </div>
    </div>
  );
}

export default ShowFestivalList;