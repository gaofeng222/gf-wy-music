import React, { Suspense } from 'react'
import '@/App.scss'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { Link } from 'react-router-dom'
import Loading from '@c/Loading'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/store'
import {
	increment,
	decrement,
	incrementByAmount
} from '@/store/modules/counter'

function App() {
	const { count, message } = useSelector(
		(state: RootState) => ({
			count: state.counter.value,
			message: state.counter.message
		}),
		shallowEqual
	)

	const dispatch = useDispatch()

	const add = () => {
		dispatch(increment())
	}

	const minus = () => {
		dispatch(decrement())
	}

	const addByAmount = () => {
		dispatch(incrementByAmount(10))
	}

	return (
		<div className="app">
			<Link to="/discover">发现音乐</Link>
			<Link to="/mine">我的音乐</Link>
			<Link to="/focus">关注</Link>
			<Link to="/download">下载客户端</Link>
			<div>
				<p>数据是:{count}</p>
				<p>显示的消息是：{message}</p>
				<button onClick={add}>add + 1</button>
				<button onClick={minus}>minus - 2</button>
				<button onClick={addByAmount}>add by amount</button>
			</div>
			<Suspense fallback={<Loading />}>
				<div>{useRoutes(routes)}</div>
			</Suspense>
		</div>
	)
}

export default App
