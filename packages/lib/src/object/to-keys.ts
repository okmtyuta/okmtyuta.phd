// biome-ignore lint/suspicious/noExplicitAny:
export const toKeys = <T extends Record<string, any>>(
	object: T,
): (keyof T)[] => {
	return Object.keys(object)
}
