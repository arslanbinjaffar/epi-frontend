import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/redux/store/store'

// Define a type for the slice state
export interface CounterStateType {
  value: number
}

// Define the initial state using that type
const initialState: CounterStateType = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      increment: (state) => {
      state.value += 1
    },
      decrement: (state) => {
          if (state.value == 0) {
              return;
            }
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})


export const CounterActions = {
    increment: counterSlice.actions.increment,
    decrement: counterSlice.actions.decrement,
    incrementByAmount:counterSlice.actions.incrementByAmount
}

// Other code such as selectors can use the imported `RootState` type
export const CounterState = (state: RootState) => state?.counter.value

export default counterSlice.reducer