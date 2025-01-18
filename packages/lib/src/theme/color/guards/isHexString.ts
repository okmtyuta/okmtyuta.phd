import type { HexString } from "../types/HexString"

/**
 * Check whether source is HexString.
 * @param {unknown} source Target for checking
 * @returns {boolean} Whether source is HexString or not.
 */
export const isHexString = (source: unknown): source is HexString => {
	if (typeof source !== "string") {
		return false
	}
	if (!source.startsWith("#")) {
		return false
	}

	const hexRegExp = /^#[0-9a-fA-F]{6}$/

	if (!hexRegExp.test(source)) {
		return false
	}

	return true
}
