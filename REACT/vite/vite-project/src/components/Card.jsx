// import React from 'react';
// import pic from "../images/img2.jpg";
// import "../components/Card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <img src={props.pic} alt="img2" />
      <h2>{props.roll}</h2>
    </div>
  );
};

export default Card;
