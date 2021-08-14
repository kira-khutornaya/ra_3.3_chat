import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({ list }) {
  return !!list.length && (
    <ul>
      {
        list.map(({
          id, type, from, time, text,
        }) => {
          switch (type) {
            case 'message':
              return <Message from={from} message={{ time, text }} key={id} />;
            case 'response':
              return <Response from={from} message={{ time, text }} key={id} />;
            default:
              return <Typing from={from} message={{ time }} key={id} />;
          }
        })
      }
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: [],
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['response', 'message', 'typing']),
    }),
  ),
};

export default MessageHistory;
