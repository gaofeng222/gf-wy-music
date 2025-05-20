import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
	message: string
	direction: 'left' | 'right' | 'up' | 'down'
}

const initialState: CounterState = {
	value: 0,
	message: 'hello world',
	direction: 'left'
}
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		}
	}
})

// 到处所有的action creators
export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions
