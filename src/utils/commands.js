import { Map } from 'immutable';
import { compass } from './constants.js'

export function getPlacement(placement) {
  const x = placement.x_pos;
  const y = placement.y_pos;
  const f = placement.direction;
  return Map({
    x_pos: x,
    y_pos: y,
    direction: f,
    placed: true,
  });
}

export function move(state) {
  const x_pos = state.get('x_pos');
  const y_pos = state.get('y_pos');
  const direction = state.get('direction');

  switch (direction) {
    case 'NORTH':
      return Map({ y_pos: y_pos + 1 });
    case 'SOUTH':
      return Map({ y_pos: y_pos - 1 });
    case 'EAST':
      return Map({ x_pos: x_pos + 1 });
    case 'WEST':
      return Map({ x_pos: x_pos - 1 });
    default:
      return Map({
        x_pos: x_pos,
        y_pos: y_pos,
        direction: direction,
      });
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
