import { tableSize, cardinals, validCommands } from './constants'
import { checkIfPlaceCommand } from './utilities'

const placeRegExp = new RegExp('PLACE [0-4],[0-4],(NORTH|SOUTH|EAST|WEST)');

export function validatePlacement(x_pos, y_pos, direction) {
  return (
    (x_pos >= tableSize.x.min && x_pos <= tableSize.x.max) &&
    (y_pos >= tableSize.y.min && y_pos <= tableSize.y.max) &&
    (cardinals.includes(direction))
  )
}

export function validateInput(input) {
  if(!input) {
    return false;
  }
  if(validCommands.includes(input) || input.includes('PLACE')) {
    if(checkIfPlaceCommand(input)) {
      return placeRegExp.test(input);
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
}
