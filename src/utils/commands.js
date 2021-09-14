import { Map } from 'immutable';
import { validatePlacement } from './validation.js'
import { tableSize, compass } from './constants.js'

export function place(placement) {
  const x = placement.x_pos;
  const y = placement.y_pos;
  const f = placement.direction;
  if(validatePlacement(x, y, f)){
    return Map({
      x_pos: x,
      y_pos: y,
      direction: f,
      placed: true,
    });
  }
  else {
    return Map({
      errorMsg: `Cannot be placed at ${x}, ${y}, ${f}`,
    });
  }
}

export function move(state) {
  const x = state.get("x_pos");
  const y = state.get("y_pos");

  let movementErrorMsg = `Cannot move further ${state.get("direction")}.`

  switch (state.get("direction")) {
    case 'NORTH':
      return Map(
        y < tableSize.y.max ? { y_pos: y + 1 } : { hasError: true, errorMsg: movementErrorMsg }
      );
    case 'SOUTH':
      return Map(
        y > tableSize.y.min ? { y_pos: y - 1 } : { hasError: true, errorMsg: movementErrorMsg }
      );
    case 'EAST':
      return Map(
        x < tableSize.x.max ? { x_pos: x + 1 } : { hasError: true, errorMsg: movementErrorMsg }
      );
    case 'WEST':
      return Map(
        x > tableSize.x.min ? { x_pos: x - 1 } : { hasError: true, errorMsg: movementErrorMsg }
      );
    default:
      return state;
  }
}

export function left(state) {
  return Map({
    direction: compass[state.get('direction')]['left'],
  })
}

export function right(state) {
  return Map({
    direction: compass[state.get('direction')]['right'],
  })
}
