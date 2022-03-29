// Actions
const ADDED = 'bookstore/books/ADDED';
const REMOVED = 'bookstore/books/REMOVED';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        action.book,
      ];
    case REMOVED:
      return state.filter((book) => book.id !== action.id);
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
