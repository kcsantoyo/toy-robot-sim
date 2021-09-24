export const compass = {
  'NORTH' : {
    'left': 'WEST',
    'right': 'EAST',
  },
  'SOUTH' : {
    'left': 'EAST',
    'right': 'WEST',
  },
  'EAST' : {
    'left': 'NORTH',
    'right': 'SOUTH',
  },
  'WEST' : {
    'left': 'SOUTH',
    'right': 'NORTH',
  },
};

export const tableSize = {
  x: {
    min: 0,
    max: 4
  },
  y: {
    min: 0,
    max: 4
  }
}

export const cardinals = ['NORTH', 'SOUTH', 'EAST', 'WEST']

export const validCommands = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']

export const invalidCommandMsg = (input) => {
  if(input !== '') {
    return (`Must enter a valid command. ${input} is not a valid command`);
  }
  else {
    return ('Must enter a valid command. Input empty.');
  }
} ;

export const invalidPlaceFormatMsg = 'Place command must be formatted "PLACE X,Y,F"';

export const invalidPlacementErrorMsg = (x, y, direction) => { return `Cannot be placed facing ${direction} at ${x}, ${y}.` }

export const movementErrorMsg = (direction) => { return `Cannot move further ${direction}.` }

export const mustPlaceErrorMsg = 'Robot must be placed first.';
