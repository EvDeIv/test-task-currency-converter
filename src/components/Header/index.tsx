import { FC } from 'react';
import { Box, Image, Text } from '@mantine/core';

import MainCurrencyRates from './MainCurrencyRates/index';
import { IconLogo } from '../../assets/icons';
import { useHeaderSyles } from './styles';

const Header: FC = () => {
	const { classes } = useHeaderSyles();

	return (
		<Box component={'header'} className={classes.header}>
			<Box className={classes.logoContainer}>
				<Image
					className={classes.logo}
					src={IconLogo}
					alt={'Currency Converter'}
					width={50}
					fit={'contain'}
				/>
				<Text className={classes.headerText}>Your Currency Converter</Text>
			</Box>
			<MainCurrencyRates />
		</Box>
	);
};

export default Header;
