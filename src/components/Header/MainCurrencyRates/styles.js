import { createStyles } from '@mantine/core';

export const useMainCurrencyRatesStyles = createStyles(
	(theme, _params, getRef) => ({
		container: {
			display: 'flex',
			flexDirection: 'column',
			height: 70,
			width: 122,
		},
		headerText: {
			fontWeight: 700,
		},
		loadingContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: 'inherit',
		},
	})
);
