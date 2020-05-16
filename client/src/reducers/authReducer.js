import { FETCH_USER } from '../actions/types';

const Reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
  
export default Reducer;