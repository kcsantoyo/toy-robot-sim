export function formatPlaceInput(input) {
  const placementString = input.replace('PLACE', '').trim();
  const coords = placementString.split(',');
  const x_pos = parseInt(coords[0]);
  const y_pos = parseInt(coords[1]);
  const direction = coords[2].trim();
  return {
    type: 'PLACE',
    placement: {
      x_pos: x_pos,
      y_pos: y_pos,
      direction: direction,
    },
  }
}

export function checkIfPlaceCommand(input) {
  return input.includes('PLACE');
}
