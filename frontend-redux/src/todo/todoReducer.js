const INITIAL_STATE = {
  description: 'Read books',
  list: [{
    _id: 1,
    description: 'Pay bank bills',
    done: true
  }, {
    _id: 2,
    description: 'Play games',
    done: false
  }, {
    _id: 3,
    description: 'Learn Redux',
    done: false
  }]
}

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload  }
    default:
      return state
  }
}