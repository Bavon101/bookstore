// Actions
const STATUS_ASKED = 'bookstore/categories/STATUS_ASKED';

// Reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case STATUS_ASKED:

      return [...state, 'Under construction'];

    default:
      return state;
  }
}

// Action creaters
export function checkStatus(book) {
  return { type: STATUS_ASKED, book };
}
