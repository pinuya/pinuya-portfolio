import { createThemeAction } from "remix-themes"
import { themeSessionResolver } from "~/cookies"
 
export const action = createThemeAction(themeSessionResolver)