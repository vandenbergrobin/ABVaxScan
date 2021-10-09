module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
					'.android.js',
					'.android.tsx',
					'.ios.js',
					'.ios.tsx',
				],
				root: ['src'],
			},
		],
		["module:react-native-dotenv", {
			"moduleName": "@env",
			"path": ".env",
			"blacklist": null,
			"whitelist": null,
			"safe": false,
			"allowUndefined": true
		}]
	],
};
