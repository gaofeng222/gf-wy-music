import { getBanner } from '@/apis/user'
import { getHotRecommend } from '@/apis/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IHotRecommendType } from '@u/types'

// First, create the thunk
export const fetchBanner = createAsyncThunk(
	'recommond/banner',
	async (args, { dispatch }) => {
		const response = await getBanner()
		dispatch(setBanner(response))
		return response
	}
)

export const fetchHotRecommend = createAsyncThunk(
	'recommond/hotRecommend',
	async (args, { dispatch }) => {
		const response = await getHotRecommend()
		dispatch(setHotRecommend(response))
		return response
	}
)

export interface CounterState {
	banner: any[]
	hotRecommend: IHotRecommendType[]
}

const initialState: CounterState = {
	banner: [],
	hotRecommend: []
}

export const counterSlice = createSlice({
	name: 'recommond',
	initialState,
	reducers: {
		setBanner: (state, action: PayloadAction<any[]>) => {
			state.banner = action.payload
		},
		setHotRecommend: (state, action: PayloadAction<IHotRecommendType[]>) => {
			state.hotRecommend = action.payload
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
export const { setBanner, setHotRecommend } = counterSlice.actions
