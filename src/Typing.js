import React from 'react';
import PropTypes from 'prop-types';

function Typing({ from, message }) {
  const { name } = from;
  const { time } = message;

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <b className="fa fa-circle online">⦁</b>
          {name}
        </span>
        <span className="message-data-time">{time}</span>
        <div className="typing-container">
          <b className="fa-circle fa-100">⦁</b>
          <b className="fa-circle fa-50">⦁</b>
          <b className="fa-circle fa-25">⦁</b>
        </div>
      </div>
    </li>
  );
}

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
  }).isRequired,
};

export default Typing;
