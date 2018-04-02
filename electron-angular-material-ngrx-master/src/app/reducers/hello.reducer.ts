import {Action} from '@ngrx/store';

export function helloReducer(state: string, action: Action) {
  console.log('helloReducer: ', action.type, state);

  switch (action.type) {
    case 'ENG':
      return state = 'Hello world! Elon Musk RLZ';
    case 'HUN':
      return state = 'Hello vilag, jo nekunk mert angular';
    default:
      return state = 'Szent habakukk Micimacko!';
  }
}
