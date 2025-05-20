import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'

export const store = configureStore({
	// 多个reducer合并成一个rootReducer
	reducer: {
		counter: counterReducer
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
