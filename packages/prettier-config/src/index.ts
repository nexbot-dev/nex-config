import { Config } from 'prettier';

export default {
	arrowParens: 'avoid',
	bracketSpacing: true,
	embeddedLanguageFormatting: 'off',
	endOfLine: 'lf',
	printWidth: 160,
	quoteProps: 'consistent',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['*.json', '*,yml'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
} as Config;
