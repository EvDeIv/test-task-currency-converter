import { createStyles } from '@mantine/core';

export const useConverterSyles = createStyles((theme, _params, getRef) => ({
	converterContainer: {
		display: 'flex',
		justifyContent: 'center',
		maxWidth: 1440,
		margin: '0 auto',
		position: 'relative',
	},
	inputsContainer: {
		display: 'flex',
		flexDirection: 'column',
		margin: 30,
	},
	numberInput: {
		margin: '10px 0',
	},
}));
