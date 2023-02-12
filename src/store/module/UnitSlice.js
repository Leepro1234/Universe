import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const UnitSlice = createSlice({
  name: 'unit',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fnGetUnitList['pending'], (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(fnGetUnitList['fulfilled'], (state, action) => {
      console.log('fnGetUnitList Fullfilled!!', action)
      state.data = action.payload
      state.status = 'Complete'
    })
    builder.addCase(fnGetUnitList['rejected'], (state, action) => {
      state.status = 'fail'
    })

    builder.addCase(addUnit['pending'], (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(addUnit['fulfilled'], (state, action) => {
      console.log('addUnit Fullfilled!!', action)
      state.status = 'Complete'
      if (
        state.data.filter(
          (item) => item.redmine_id === action.payload.redmine_id
        ).length < 1
      ) {
        state.data.push(action.payload)
      }
    })
    builder.addCase(addUnit['rejected'], (state, action) => {
      state.status = 'fail'
    })
  },
})

/*************************/
const wait = (timeDelay) =>
  new Promise((resole) => setTimeout(resole, timeDelay))

const fnGetUnitList = createAsyncThunk('unit.getUnitList', async () => {
  wait(100)
  const data = await fetch(`${process.env.REACT_APP_URL}/api/unit`).then(
    (response) => response.json()
  )
  const result = []
  data.forEach((unit) => {
    result.push({
      redmine_id: unit.redmine_id,
      name: unit.name,
      permission: unit.permission,
    })
  })
  return result
})

const addUnit = createAsyncThunk(
  'unit.addUnit',
  async ({ url, headers, param, closeModal, paramInit }) => {
    let result
    await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(param),
    })
      .then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('error!')
      })
      .then((data) => {
        paramInit()
        closeModal()
        result = data
      })
      .catch((err) => {
        console.log(err)
        throw new Error('Redux Error!')
      })
    return result
  }
)

/*************************/

// Action creators are generated for each case reducer function
export const { getUnitList } = UnitSlice.actions
export { fnGetUnitList, addUnit }

export default UnitSlice.reducer
