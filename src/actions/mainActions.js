import {RECEIVE_DATA} from './actionTypes'

export const receiveData = (data) => {

  console.log(data);
    return {
        type: RECEIVE_DATA,
        payload: data
      };
}