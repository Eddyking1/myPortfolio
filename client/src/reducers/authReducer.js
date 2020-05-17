import { FETCH_USER } from '../actions/types';
import { MdSettingsApplications } from 'react-icons/md';

const Reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userId: action.payload.googleId,
        userCredits: action.payload.credits,
        userEmail: action.payload.email,
        isOnline: true,
      };
    default:
      return state;
  }
}
  
export default Reducer;