import React from 'react';
import { Link } from 'react-router-dom';

const FestivalCard = ({festival}) => {

  return (
    <div className='card-container'>
      <img
        src='https://www.laserworld.com/images/stories/2016/masters-hardcore/masters-of-hardcore-003.jpg'
        alt='Festivals'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={'/festivals/details/'+festival._id}>{festival.name}</Link>
        </h2>
        <h3>{festival.organizer}</h3>
        <p>{festival.location}</p>
      </div>
    </div>
  );
};

export default FestivalCard;