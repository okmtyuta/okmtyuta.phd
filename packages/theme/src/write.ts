import fs from "node:fs"
import { join } from "node:path"
import { reset } from "./theme"
import { styleSourceRecord } from "./style-source/style-source-record"
import { toEntries } from "@okmtyuta/packages.lib.okmtyuta.phd"

const writeResetStyle = () => {
	fs.mkdirSync("dist", { recursive: true })
	const fd = fs.openSync(join("dist", "reset.css"), "w")
	fs.writeSync(fd, reset.style.replaceAll(/\s+/g, " "))
	fs.closeSync(fd)
}
const writeComponentsStyle = () => {
	for (const [name, styleSource] of toEntries(styleSourceRecord)) {
		fs.mkdirSync(join("dist", "components"), { recursive: true })
		const fd = fs.openSync(join("dist", "components", `${name}.css`), "w")
		fs.writeSync(fd, styleSource.style.replaceAll(/\s+/g, " "))
		fs.closeSync(fd)
	}
}
const writeJoinedStyle = () => {
	const styles = toEntries(styleSourceRecord)
		.map(([_, styleSource]) => styleSource.style)
		.join(" ")
	fs.mkdirSync("dist", { recursive: true })
	const fd = fs.openSync(join("dist", "styles.css"), "w")
	fs.writeSync(fd, styles.replaceAll(/\s+/g, " "))
	fs.closeSync(fd)
}

export const write = () => {
	writeResetStyle()
	writeComponentsStyle()
	writeJoinedStyle()
}
