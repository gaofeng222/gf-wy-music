export const formartCount = (count: number) => {
	if (count > 100000) {
		return Math.ceil(count / 1000)
	}
	return count
}
