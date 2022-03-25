import React from 'react';
import PropTypes from 'prop-types';
import Vr from './Vr';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="book">
      <div>
        <h6>Action</h6>
        <h2>{ title}</h2>
        <h5>{ author}</h5>
        <div className="book-options">
          <button type="submit">
            Comment
          </button>
          <Vr />
          <button type="submit">
            Remove
          </button>
          <Vr />
          <button type="submit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
