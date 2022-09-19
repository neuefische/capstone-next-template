
const jestConfig = {
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					transform: {
						react: {
							runtime: "automatic",
						},
					},
				},
			},
		],
	},
	transformIgnorePatterns: ['/node_modules/(?!(nanoid)/)'],
};

export default jestConfig;
