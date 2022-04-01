import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Vr from './Vr';
import apiConstants from '../api/constants';
import { deleteBook } from '../api/data_fetch';
import Loading from './Loading';

function Book(props) {
  const {
    title, author, id, category, deletingList,
  } = props;
  const dispatch = useDispatch();
  const { baseUrl, app } = apiConstants;
  const url = `${baseUrl}/apps/${app}/books/${id}`;
  const deleting = deletingList.includes(id);
  return (
    <div className="book">
      <div className="book-info">
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <div className="book-options">
          <button type="submit" className="options">
            Comment
          </button>
          <Vr />
          {
            deleting ? <Loading mini />
              : (
                <button type="submit" onClick={() => dispatch(deleteBook(url, id))} className="options">
                  Remove
                </button>
              )
          }
          <Vr />
          <button type="submit" className="options">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress" />
        <div className="progress-status">
          <h6
            className="progress-percentage"
          >
            25%
          </h6>
          <span className="p-status"> completed </span>
        </div>
      </div>
      <Vr />
      <div className="charpter-card">
        <span className="p-status"> CURRENT CHAPTER </span>
        <span className="chapter"> Chapter 17</span>
        <button type="button" className="chapter-btn">
          Update progress
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  deletingList: PropTypes.array.isRequired,
};

export default Book;
