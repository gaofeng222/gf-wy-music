import React, { Suspense } from 'react'
import '@/App.scss'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Loading from '@c/Loading'
// import { shallowEqual } from 'react-redux'
import Header from '@c/Header'
import Footer from '@c/Footer'
// import {
// 	increment,
// 	decrement,
// 	incrementByAmount
// } from '@/store/modules/counter'
// import { useAppSelector, useAppDispatch } from './hooks'

function App() {
	// const { count, message, direction } = useAppSelector(
	// 	(state) => ({
	// 		count: state.counter.value,
	// 		message: state.counter.message,
	// 		direction: state.counter.direction
	// 	}),
	// 	shallowEqual
	// )

	// const dispatch = useAppDispatch()

	// const add = () => {
	// 	dispatch(increment())
	// }

	// const minus = () => {
	// 	dispatch(decrement())
	// }

	// const addByAmount = () => {
	// 	dispatch(incrementByAmount(10))
	// }

	return (
		<div className="app">
			<Header />
			<Suspense fallback={<Loading />}>
				<div>{useRoutes(routes)}</div>
			</Suspense>
			<Footer />
		</div>
	)
}

export default App
