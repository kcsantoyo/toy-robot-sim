import { Map } from 'immutable';
import { place, move, left, right } from '../utils/commands.js'
import { mustPlaceErrorMsg } from '../utils/constants.js'

const initState = Map({
  x_pos: 0,
  y_pos: 0,
  direction: 'NORTH',
  placed: false,
  displayReport: false,
  hasError: false
});

const mustPlaceError = {
  hasError: true,
  errorMsg: mustPlaceErrorMsg,
}


export default function positionReducer(state = initState, action){
  const placed = state.get('placed');

  switch(action.type) {
    case 'PLACE':
      let placementMap = place(action.placement);
      return state.merge(placementMap);
    case 'MOVE':
      return state.merge(
        placed ? move(state) : mustPlaceError
      );
    case 'LEFT':
      return state.merge(
        placed ? left(state) : mustPlaceError
      );
    case 'RIGHT':
      return state.merge(
        placed ? right(state) : mustPlaceError
      );
    case 'REPORT':
      return state.merge(
        placed ? Map({ displayReport: true }) : mustPlaceError
      );
    case 'RESET_REPORT':
      return state.merge(
        Map({ displayReport: false })
      );
    case 'RESET_ERROR':
      return state.merge(
        Map({ hasError: false, errorMsg: null, })
      );
    case 'INVALID_COMMAND':
      return state.merge(
        Map({ hasError: true, errorMsg: "Must enter a valid command.", })
      );
    default:
      return state;
  }
}
