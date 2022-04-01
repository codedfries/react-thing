import React from "react";
import { ColorMode, getColorTheme } from "./Theme";

interface ThemeProviderProps {
	children?: React.ReactNode;
	theme: ColorMode;
}

export const ColorTheme = React.createContext(getColorTheme("light"));

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
	return <ColorTheme.Provider value={getColorTheme(theme)}>{children}</ColorTheme.Provider>;
};

export default ThemeProvider;
