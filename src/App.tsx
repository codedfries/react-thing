import Button from "components/Button";
import ThemeProvider from "theme/ThemeProvider";

const App = () => {
	const click = () => {
		console.log("hello!");
	};

	return (
		<ThemeProvider theme="light">
			<div style={{ margin: "5%" }}>
				<Button rounded medium onClick={click} color="primary">
					click me
				</Button>
			</div>
		</ThemeProvider>
	);
};

export default App;
