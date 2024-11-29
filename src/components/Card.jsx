import React from 'react';
import '../styles/Card.css';

function Card({ ticket }) {
  return (
    <div className="card">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Tag: {ticket.tag}</p>
    </div>
  );
}

export default Card;
