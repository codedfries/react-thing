export interface IColorTheme {
	background: string;
	primary: string;
	secondary: string;
	accent: string;
	error: string;
	info: string;
	success: string;
	warning: string;
}

export type ColorMode = "light" | "dark";

const LIGHT_THEME: IColorTheme = {
	background: "#FFFFFF",
	primary: "#1976D2",
	secondary: "#424242",
	accent: "#82B1FF",
	error: "#FF5252",
	info: "#2196F3",
	success: "#4CAF50",
	warning: "#FFC107",
};

const DARK_THEME: IColorTheme = {
	background: "#292929",
	primary: "#FF6600",
	secondary: "#424242",
	accent: "#82B1FF",
	error: "#FF5252",
	info: "#2196F3",
	success: "#4CAF50",
	warning: "#FFC107",
};

export const getColorTheme = (theme: ColorMode): IColorTheme => {
	if (theme === "dark") {
		return DARK_THEME;
	}
	return LIGHT_THEME;
};
