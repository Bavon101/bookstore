import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Vr from './Vr';
import { removedBook } from '../redux/books/books';

function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
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
          <button type="submit" onClick={() => dispatch(removedBook(id))}>
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
  id: PropTypes.number.isRequired,
};

export default Book;
