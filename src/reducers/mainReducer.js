import initialState from './initialState';
import { RECEIVE_DATA} from '../actions/actionTypes';

export default function data(state = initialState.data, action) {
    switch (action.type) {
 
    case RECEIVE_DATA:
        return { ...state, data: action.payload }
    default:
      return state;
  }
}