import { Map } from 'immutable';
import {
  invalidCommandMsg,
  invalidPlaceFormatMsg,
  invalidPlacementErrorMsg,
  movementErrorMsg,
  mustPlaceErrorMsg,
} from '../utils/constants.js'

const initState = Map({
  displayReport: false,
  hasError: false,
  errorMsg: null,
});

export default function pageReducer(state = initState, action) {
  switch(action.type) {
    case 'REPORT':
      return state.merge(
        Map({ displayReport: true })
      );
    case 'RESET_REPORT':
      return state.merge(
        Map({ displayReport: false })
      );
    case 'RESET_ERROR':
      return state.merge(
        Map({ hasError: false, errorMsg: null, })
      );
    case 'MUST_PLACE_ERROR':
      return state.merge(
        Map({ hasError: true, errorMsg: mustPlaceErrorMsg, })
      );
    case 'INVALID_COMMAND_ERROR':
      return state.merge(
        Map({ hasError: true, errorMsg: invalidCommandMsg(action.input), })
      );
    case 'INVALID_PLACE_FORMAT_ERROR':
      return state.merge(
        Map({ hasError: true, errorMsg: invalidPlaceFormatMsg, })
      );
    case 'INVALID_PLACEMENT_ERROR':
      const x = action.placement.x_pos;
      const y = action.placement.y_pos;
      const direction = action.placement.direction;
      return state.merge(
        Map({ hasError: true, errorMsg: invalidPlacementErrorMsg(x, y, direction), })
      );
    case 'CANNOT_MOVE_FURTHER_ERROR':
      return state.merge(
        Map({ hasError: true, errorMsg: movementErrorMsg(action.direction)})
      );
    default:
      return state;
  }
}
