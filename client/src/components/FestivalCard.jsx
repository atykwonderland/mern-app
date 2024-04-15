import React from 'react';
import { Link } from 'react-router-dom';

const FestivalCard = ({festival}) => {

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d' /* TODO pick different image */
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