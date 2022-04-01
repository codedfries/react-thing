import { useContext } from "react";
import { ColorTheme } from "../theme/ThemeProvider";

const useColorScheme = () => {
	return useContext(ColorTheme);
};
export default useColorScheme;
