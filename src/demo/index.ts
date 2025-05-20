interface IFnCall {
	<TWhy>(fn: () => TWhy, age: number): string
}
const foo: IFnCall = (name, age) => {
	return `${name} is ${age}`
}
console.log(foo<number>(() => 56, 20))

export {}
