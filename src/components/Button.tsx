import "components/Button.scss";
import useColorScheme from "hooks/useColorTheme";
import { IColorTheme } from "theme/Theme";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

interface ButtonProps {
	children: string;
	loading?: boolean;
	color?: string;
	rounded?: boolean;
	block?: boolean;
	small?: boolean;
	medium?: boolean;
	large?: boolean;
	outlined?: boolean;
	onClick?: () => void;
}

const buildButtonButtonCssClass = (props: ButtonProps) => {
	const modifiers: Array<string> = [];
	const cssModifiers: Record<string, { modifier: string }> = {
		rounded: { modifier: "button--rounded" },
		block: { modifier: "button--block" },
		small: { modifier: "button--sm" },
		medium: { modifier: "button--md" },
		large: { modifier: "button--lg" },
		outlined: { modifier: "button--outlined" },
	};

	const propsList = Object.entries(props);

	for (let i = 0; i < propsList.length; i++) {
		const currentOption = cssModifiers[propsList[i][0]];
		if (currentOption) {
			modifiers.push(currentOption.modifier);
		}
	}

	return `button ${modifiers.join(" ")}`;
};

const getColor = (colors: IColorTheme, color?: string): string => {
	const keys = Object.keys(colors);

	if (!color) {
		return colors.primary;
	}

	if (!keys.includes(color)) {
		return color;
	}

	const _index = keys.indexOf(color);
	return Object.values(colors)[_index];
};

const Button = (props: ButtonProps): JSX.Element => {
	const colors = useColorScheme();

	const TextChild = () => (
		<span className="button__text" style={{ color: "#FFFFFF" }}>
			{props.children}
		</span>
	);

	const IconChild = () => <Icon path={mdiLoading} color="#FFFFFF" size={1} spin />;

	return (
		<button
			onClick={props.onClick}
			className={buildButtonButtonCssClass(props)}
			style={{ backgroundColor: getColor(colors, props.color) }}
		>
			{props.loading ? <IconChild /> : <TextChild />}
		</button>
	);
};

export default Button;
