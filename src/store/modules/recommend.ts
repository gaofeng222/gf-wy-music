import { getBanner } from '@/apis/user'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchBanner = createAsyncThunk(
	'recommond/banner',
	async (args, { dispatch }) => {
		const response = await getBanner()
		dispatch(setBanner(response))
		return response
	}
)

export interface CounterState {
	banner: any[]
}

const initialState: CounterState = {
	banner: []
}

export const counterSlice = createSlice({
	name: 'recommond',
	initialState,
	reducers: {
		setBanner: (state, action: PayloadAction<any[]>) => {
			state.banner = action.payload
		}
	}
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(fetchBanner.pending, () => {
	// 			console.log('🚀 ~ builder.addCase ~ state:pending')
	// 		})
	// 		.addCase(fetchBanner.fulfilled, (state, action) => {
	// 			console.log('🚀 ~ builder.addCase ~ state:', state)
	// 			// Add user to the state array
	// 			state.banner = action.payload
	// 		})
	// 		.addCase(fetchBanner.rejected, () => {
	// 			console.log('🚀 ~ builder.addCase ~ state:rejected')
	// 		})
	// }
})

export default counterSlice.reducer
export const { setBanner } = counterSlice.actions
