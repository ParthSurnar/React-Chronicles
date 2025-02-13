import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import App from "next/app";

export default function () {
	return (
		<html>
			<body>
				<Theme>
					< App/>
				</Theme>
			</body>
		</html>
	);
}


