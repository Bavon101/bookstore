// Actions
const STATUS_ASKED = 'STATUS_ASKED';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case STATUS_ASKED:

      return 'Under construction';

    default:
      return state;
  }
}

// Action creaters
export function checkStatus(book) {
  return { type: STATUS_ASKED, book };
}
