import React, { memo, PureComponent } from 'react'

interface Props {
	name: string
	age: number
	children?: React.ReactNode
}

interface State {
	message: string
	count: number
}

class Demo extends PureComponent<Props, State> {
	username: string = '道长'
	// constructor(props: Props) {
	// 	super(props)

	// 	this.state = {
	// 		count: 0,
	// 		message: 'hello world'
	// 	}
	// }

	state = {
		count: 10,
		message: 'hello world'
	}

	getSnapshotBeforeUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<State>
	) {
		if (prevProps.age !== this.props.age) {
			return prevProps.age
		}
	}

	componentDidUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<State>,
		snapshot?: any
	): void {
		console.log('snapshot', snapshot)
		if (prevProps.age !== this.props.age) {
			this.setState({
				count: snapshot
			})
		}
	}
	render(): React.ReactNode {
		return (
			<div>
				<h2>Demo</h2>
				<div>
					<p>{this.props.age}</p>
					<p>{this.props.name}</p>
					<p>{this.state.message}</p>
					<p>{this.state.count}</p>
				</div>
			</div>
		)
	}
}

export default memo(Demo)
