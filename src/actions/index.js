export const sendCommand = (type, placement) => {
    return {
      type: type,
      placement: placement,
    };
}

export const resetError = () => {
  return {
    type: 'RESET_ERROR'
  }
}

export const resetReport = () => {
  return {
    type: 'RESET_REPORT'
  }
}

export const invalidCommandError = (input) => {
  return {
    type: 'INVALID_COMMAND_ERROR',
    input: input,
  }
}

export const mustPlaceError = () => {
  return {
    type: 'MUST_PLACE_ERROR'
  }
}

export const cannotMoveFurtherError = (direction) => {
  return {
    type: 'CANNOT_MOVE_FURTHER_ERROR',
    direction: direction,
  }
}

export const invalidPlacementError = (placement) => {
  return {
    type: 'INVALID_PLACEMENT_ERROR',
    placement: placement,
  }
}

export const invalidPlaceFormatError = () => {
  return {
    type: 'INVALID_PLACE_FORMAT_ERROR',
  }
}
