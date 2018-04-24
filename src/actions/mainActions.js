import {RECEIVE_DATA} from './actionTypes'

export const receiveData = (data) => {
    return {
        type: RECEIVE_DATA,
        payload: data
      };
}