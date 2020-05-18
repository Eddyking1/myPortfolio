import { FETCH_USER, SUBMIT_FORM } from '../actions/types';
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
    case SUBMIT_FORM:
      return {
        ...state,
        formAnswers: {
          email: action.payload.data,
          name: action.payload.data1,
          paket: action.payload.data2,
          specifikation: action.data3,
        }
      };
    default:
      return state;
  }
}

export default Reducer;