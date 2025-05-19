import React from 'react'
import '@/App.scss'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import DownLoad from '@v/DownLoad'

function App() {
	const obj = {
		name: '张三',
		age: 18,
		height: 180,
		weight: 70
	}
	return (
		<div className="app">
			<DownLoad {...obj}>
				<h3>这是一个下载组件</h3>
				<p>描述文字</p>
			</DownLoad>
			{useRoutes(routes)}
		</div>
	)
}

export default App
