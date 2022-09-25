import { createStyles } from '@mantine/core';

export const useHeaderSyles = createStyles((theme, _params, getRef) => ({
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		maxWidth: 1440,
		margin: '0 auto',
		padding: 20,
	},
	headerText: {
		display: 'inline-block',
		marginLeft: 20,
		fontWeight: 700,
		fontSize: 20,
	},
	logo: {
		display: 'inline-block',
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
	},
}));
