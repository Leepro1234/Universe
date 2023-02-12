import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const UserStateSlice = createSlice({
  name: 'userstate',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fnLogin['pending'], (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(fnLogin['fulfilled'], (state, action) => {
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token)
      } else {
        localStorage.removeItem('token')
      }
      state.data = { token: action.payload.token }
      state.status = 'Complete'
    })
    builder.addCase(fnLogin['rejected'], (state, action) => {
      state.status = 'fail'
    })
  },
})

/*************************/
const wait = (timeDelay) =>
  new Promise((resole) => setTimeout(resole, timeDelay))

const fnLogin = createAsyncThunk('userstate.login', async (token) => {
  wait(100)

  return { token: token }
})

/*************************/

// Action creators are generated for each case reducer function
export { fnLogin }

export default UserStateSlice.reducer
