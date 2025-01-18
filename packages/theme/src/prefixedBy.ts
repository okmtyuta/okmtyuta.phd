export const prefixedBy = (prefix: string) => {
	const prefixed = (...targets: string[]) => {
		const _prefix = `AMUI-component-${prefix}_`

		return `${_prefix}${targets.join("-")}`
	}

	return prefixed
}
