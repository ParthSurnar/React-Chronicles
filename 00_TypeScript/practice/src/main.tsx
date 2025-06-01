import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import App from "next/app";

export default function Main() {
	return (
		<html>
			<body>
				<Theme>
					<App />
				</Theme>
			</body>
		</html>
	);
}


