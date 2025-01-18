export type CSSValue = {
	flexDirection: "row" | "column" | "row-reverse" | "column-reverse"

	alignContent:
		| "normal"
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-around"
		| "space-between"
		| "stretch"

	justifyContent:
		| "normal"
		| "center"
		| "flex-start"
		| "flex-end"
		| "space-around"
		| "space-between"
		| "space-evenly"

	alignItems:
		| "normal"
		| "center"
		| "flex-start"
		| "flex-end"
		| "stretch"
		| "baseline"

	position: "static" | "relative" | "fixed" | "absolute" | "sticky"
}
