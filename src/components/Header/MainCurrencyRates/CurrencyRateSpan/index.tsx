import { FC } from 'react';
import { Box, Text } from '@mantine/core';

import { useCurrencyRateSpanStyles } from './styles';

interface ICurrencyRateSpan {
	currency: string;
	rate?: number;
}

const CurrencyRateSpan: FC<ICurrencyRateSpan> = ({ currency, rate }) => {
	const { classes } = useCurrencyRateSpanStyles();

	return (
		<Box>
			<Text className={classes.currencyText}>
				{`1 ${currency} = ${(1 / (rate ?? 1)).toFixed(2)} UAH`}{' '}
			</Text>
		</Box>
	);
};

export default CurrencyRateSpan;
