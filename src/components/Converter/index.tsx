import { FC, useEffect } from 'react';
import { Box, LoadingOverlay, NumberInput, Select, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRecoilValue } from 'recoil';
import { baseRatesAtom } from './../../store/atoms';

import { useConverterSyles } from './styles';
import { useCurrentRate } from 'services';

const commonSelectStyles = {
	item: { padding: '10px' },
	itemsWrapper: { marginBottom: 20 },
};

interface IForm {
	firstAmount: number;
	firstCurrency?: string;
	secondAmount: number;
	secondCurrency?: string;
}

const Converter: FC = () => {
	const { classes } = useConverterSyles();
	const { data: baseRatesData } = useRecoilValue(baseRatesAtom);

	const { data: currentRateData, mutate, isLoading } = useCurrentRate();

	const { getInputProps, values, setValues } = useForm<IForm>({});

	const handeFirstChange = (value?: number) => {
		if (value && currentRateData?.data.result)
			setValues((prev) => ({
				...prev,
				firstAmount: value,
				secondAmount: value * currentRateData?.data.result,
			}));
	};

	const handeSecondChange = (value?: number) => {
		if (value && currentRateData?.data.result)
			setValues((prev) => ({
				...prev,
				firstAmount: value / currentRateData?.data.result,
				secondAmount: value,
			}));
	};

	const handleInputChange = (key: string) => {
		return (value?: number) => {
			if (!value)
				setValues((prev) => ({
					...prev,
					firstAmount: 0,
					secondAmount: 0,
				}));
			if (key === 'firstAmount') handeFirstChange(value);
			if (key === 'secondAmount') handeSecondChange(value);
		};
	};

	const handleSelectChange = (key: string) => {
		return (value: string) => {
			setValues((prev) => ({
				...prev,
				firstAmount: 0,
				secondAmount: 0,
				[key]: value,
			}));
		};
	};

	useEffect(() => {
		if (values.firstCurrency && values.secondCurrency) {
			mutate({
				firstCurrency: values.firstCurrency,
				secondCurrency: values.secondCurrency,
			});
		}
	}, [values.firstCurrency, values.secondCurrency]);

	return (
		<Box className={classes.converterContainer}>
			<LoadingOverlay visible={isLoading} overlayBlur={2} />
			<Box className={classes.inputsContainer}>
				<Text align="center">First Currency</Text>
				<NumberInput
					placeholder="Amount"
					className={classes.numberInput}
					hideControls
					precision={4}
					{...getInputProps('firstAmount')}
					onChange={handleInputChange('firstAmount')}
				/>
				<Select
					styles={commonSelectStyles}
					placeholder="Select Currency"
					data={Object.keys(baseRatesData?.rates ?? {})}
					searchable
					transition="pop-top-left"
					transitionDuration={80}
					transitionTimingFunction="ease"
					{...getInputProps('firstCurrency')}
					onChange={handleSelectChange('firstCurrency')}
				/>
			</Box>
			<Box className={classes.inputsContainer}>
				<Text align="center">Second Currency</Text>

				<NumberInput
					placeholder="Amount"
					className={classes.numberInput}
					hideControls
					precision={4}
					{...getInputProps('secondAmount')}
					onChange={handleInputChange('secondAmount')}
				/>

				<Select
					styles={commonSelectStyles}
					placeholder="Select Currency"
					data={Object.keys(baseRatesData?.rates ?? {})}
					searchable
					transition="pop-top-left"
					transitionDuration={80}
					transitionTimingFunction="ease"
					{...getInputProps('secondCurrency')}
					onChange={handleSelectChange('secondCurrency')}
				/>
			</Box>
		</Box>
	);
};

export default Converter;
