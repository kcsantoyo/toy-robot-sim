export function formatPlaceInput(input) {
  const args = input.split(' ');
  const coords = args[1].split(',');

  const x_pos = parseInt(coords[0]);
  const y_pos = parseInt(coords[1]);

  return {
    type: args[0],
    placement: {
      x_pos: x_pos,
      y_pos: y_pos,
      direction: coords[2],
    },
  }
}

export function checkIfPlaceCommand(input) {
  return input.includes('PLACE');
}

export function checkIfReportCommand(input) {
  return input === 'REPORT';
}
