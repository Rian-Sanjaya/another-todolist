import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import {todoReducer} from './reducers/todoReducer'
import messageReducer from './reducers/messagesReducer'

const allReducers = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)