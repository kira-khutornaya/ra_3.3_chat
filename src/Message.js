import React from 'react';
import PropTypes from 'prop-types';

function Message({ from, message }) {
  const { name } = from;
  const { time, text } = message;

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <b className="fa online">⦁</b>
          {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text || ''}</div>
    </li>
  );
}

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Message;
