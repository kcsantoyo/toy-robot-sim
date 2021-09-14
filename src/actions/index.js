export const performCommandAction = (type, placement) => {
  switch(type) {
    case 'PLACE':
      return {
        type: 'PLACE',
        placement: placement
      }
    case 'MOVE':
      return {
        type: 'MOVE',
      }
    case 'LEFT':
      return {
        type: 'LEFT',
      }
    case 'RIGHT':
      return {
        type: 'RIGHT',
      }
    default:
      return {
        type: type,
      };
  }
}

export const resetError = () => {
  return {
    type: "RESET_ERROR"
  }
}

export const resetReport = () => {
  return {
    type: "RESET_REPORT"
  }
}

export const invalidCommandError = () => {
  return {
    type: "INVALID_COMMAND"
  }
}
