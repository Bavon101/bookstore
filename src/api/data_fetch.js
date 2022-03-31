import {
  addedBook, addingBookStarted, bookAddingFailure, bookDeletionDone, removedBook, startDeletingBook,
} from '../redux/books/books';
import { fetchDataBegin, fetchDataFailure, fetchDataSuccess } from './data_fetch_statuses';

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchBooks(url = '') {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((books) => {
        dispatch(fetchDataSuccess(books));
        return books;
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
}

export function addBook(url = '', book = {}) {
  return (dispatch) => {
    dispatch(addingBookStarted());
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(handleErrors)
      .then((r) => {
        dispatch(addedBook(
          {
            ...book,
            id: `${book.item_id}`,
          },
        ));
        return r;
      })
      .catch((error) => dispatch(bookAddingFailure(error)));
  };
}

export function deleteBook(url = '', bookId) {
  return (dispatch) => {
    dispatch(startDeletingBook(bookId));
    return fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: bookId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(handleErrors)
      .then((res) => {
        dispatch(removedBook(bookId));
        dispatch(bookDeletionDone(bookId));
        return res;
      })
      .catch((error) => dispatch(bookAddingFailure(error)));
  };
}
