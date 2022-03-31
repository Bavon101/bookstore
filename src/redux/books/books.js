import { FETCH_DATA_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../../api/data_fetch_statuses';

// Actions
const ADDED = 'bookstore/books/ADDED';
const REMOVED = 'bookstore/books/REMOVED';
const ADDING_BOOK_STARTED = 'bookstore/books/ADDING_BOOK_STARTED';
const ADDING_BOOK_DONE = 'bookstore/books/ADDING_BOOK_DONE';
const ADDING_BOOK_FAILURE = 'bookstore/books/ADDING_BOOK_FAILURE';
const BOOKDELETION_STARTED = 'bookstore/books/BOOKDELETION_STARTED';
const BOOKDELETION_DONE = 'bookstore/books/BOOKDELETION_DONE';
const deStructureObjectToList = (obj = {}) => Object.keys(obj).map((key) => {
  const book = obj[key][0];
  return {
    ...book,
    id: key,
  };
});
// Reducer
export default function bookReducer(state = {
  books: [],
  loading: false,
  error: null,
  adding: false,
  adding_error: null,
  deleting: [],
}, action) {
  switch (action.type) {
    case ADDED:
      return {
        ...state,
        books: [
          ...state.books,
          action.book,
        ],
      };
    case REMOVED:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        books: [
          ...deStructureObjectToList(action.payload),
        ],
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADDING_BOOK_STARTED:
      return {
        ...state,
        adding: true,
      };
    case ADDING_BOOK_DONE:
      return {
        ...state,
        adding: false,
      };
    case ADDING_BOOK_FAILURE:
      return {
        ...state,
        adding_error: action.payload,
      };
    case BOOKDELETION_STARTED:
      return {
        ...state,
        deleting: [
          ...state.deleting,
          action.payload,
        ],
      };
    case BOOKDELETION_DONE:
      return {
        ...state,
        deleting: [
          ...state.deleting.filter((id) => id !== action.payload),
        ],
      };
    default:
      return state;
  }
}

// Action creaters
export function addedBook(book = {}) {
  return { type: ADDED, book };
}
export function removedBook(id) {
  return { type: REMOVED, id };
}

export function addingBookStarted() {
  return { type: ADDING_BOOK_STARTED };
}

export function doneAddingBook() {
  return { type: ADDING_BOOK_DONE };
}

export function bookAddingFailure(error) {
  return { type: ADDING_BOOK_FAILURE, payload: error };
}

export function startDeletingBook(bookId) {
  return { type: BOOKDELETION_STARTED, payload: bookId };
}
export function bookDeletionDone(bookId) {
  return { type: BOOKDELETION_DONE, payload: bookId };
}
