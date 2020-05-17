import { FETCH_USER } from '../actions/types';

const Reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: state.user.iD = action.payload.googleId,
        user: state.user.credits = action.payload.credits,
        isOnline: true,
      };
    default:
      return state;
  }
}
  
export default Reducer;