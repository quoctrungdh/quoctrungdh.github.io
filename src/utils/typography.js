import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography({
    ...fairyGateTheme,
    baseFontSize: "16px",
    googleFonts: [
        {
            name: "Open Sans",
            styles: ["400", "400i", "700"],
        },
    ],
    headerFontFamily: ["Open Sans", "sans-serif"],
    bodyFontFamily: ["Open Sans", "sans-serif"],
})

export const { scale, rhythm, options } = typography
export default typography