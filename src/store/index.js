import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './module/CounterSlice'
import userStateReducer from './module/UserStateSlice'
export default configureStore(
  {
    reducer: {
      counter: counterReducer,
      userState: userStateReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
