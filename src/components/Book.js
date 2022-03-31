import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Vr from './Vr';
import apiConstants from '../api/constants';
import { deleteBook } from '../api/data_fetch';

function Book(props) {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  const { baseUrl, app } = apiConstants;
  const url = `${baseUrl}/apps/${app}/books/${id}`;
  return (
    <div className="book">
      <div>
        <span className="category">{ category }</span>
        <h2>{ title}</h2>
        <h5>{ author}</h5>
        <div className="book-options">
          <button type="submit" className="options">
            Comment
          </button>
          <Vr />
          <button type="submit" onClick={() => dispatch(deleteBook(url, id))} className="options">
            Remove
          </button>
          <Vr />
          <button type="submit" className="options">
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
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
