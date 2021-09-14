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

export const mustPlaceErrorMsg = 'Robot must be placed first.';

export const validCommands = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
