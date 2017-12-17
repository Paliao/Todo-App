import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
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
  })
})

export default rootReducer