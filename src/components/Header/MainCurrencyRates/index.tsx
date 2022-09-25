import { FC } from 'react';
import { Box, Loader, Text } from '@mantine/core';

import { useMainCurrencyRatesStyles } from './styles';
import CurrencyRateSpan from './CurrencyRateSpan';
import { useRecoilValue } from 'recoil';
import { baseRatesAtom } from 'store';

const MainCurrencyRates: FC = () => {
	const { classes } = useMainCurrencyRatesStyles();
	const { data, isLoading } = useRecoilValue(baseRatesAtom);

	return (
		<Box className={classes.container}>
			<Text className={classes.headerText}>Today Rates</Text>
			{isLoading ? (
				<Box className={classes.loadingContainer}>
					<Loader />
				</Box>
			) : (
				<>
					<CurrencyRateSpan currency={'USD'} rate={data?.rates.USD} />
					<CurrencyRateSpan currency={'EUR'} rate={data?.rates.USD} />
				</>
			)}
		</Box>
	);
};

export default MainCurrencyRates;
