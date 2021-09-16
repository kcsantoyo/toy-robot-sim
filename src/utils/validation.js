import { tableSize, cardinals, validCommands } from './constants'

const placeRegExp = new RegExp('PLACE +-?[0-9]+ *, *-?[0-9]+ *, *[a-zA-Z]+');

export function validatePlacement(placement) {
  return (
    (placement.x_pos >= tableSize.x.min && placement.x_pos <= tableSize.x.max) &&
    (placement.y_pos >= tableSize.y.min && placement.y_pos <= tableSize.y.max) &&
    (cardinals.includes(placement.direction))
  )
}

export function validatePlaceFormat(input) {
  return placeRegExp.test(input)
}

export function validateInput(input) {
  if(input === '') {
    return false;
  }
  else {
    return (validCommands.includes(input) || input.includes('PLACE'))
  }
}

export function validateMove(x_pos, y_pos, direction) {
  switch (direction) {
    case 'NORTH':
      return (y_pos < tableSize.y.max);
    case 'SOUTH':
      return (y_pos > tableSize.y.min);
    case 'EAST':
      return (x_pos > tableSize.x.min);
    case 'WEST':
      return (x_pos < tableSize.x.max);
    default:
      return false;
  }
}
