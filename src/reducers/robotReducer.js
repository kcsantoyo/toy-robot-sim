import { Map } from 'immutable';
import { getPlacement, move, left, right } from '../utils/commands.js'

const initState = Map({
  x_pos: 0,
  y_pos: 0,
  direction: 'NORTH',
  placed: false,
});


export default function robotReducer(state = initState, action){
  switch(action.type) {
    case 'PLACE':
      let placementMap = getPlacement(action.placement);
      return state.merge(placementMap);
    case 'MOVE':
      return state.merge(
        move(state)
      );
    case 'LEFT':
      return state.merge(
        left(state)
      );
    case 'RIGHT':
      return state.merge(
        right(state)
      );
    default:
      return state;
  }
}
