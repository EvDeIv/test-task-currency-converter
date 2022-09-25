import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';

import Converter from './components/Converter';
import Header from './components/Header';
import { useBaseCurrency } from './services';
import { baseRatesAtom } from 'store';
import { useSetRecoilState } from 'recoil';

function App() {
	const { data, isLoading } = useBaseCurrency('UAH');
	console.log(isLoading);

	const setBaseRates = useSetRecoilState(baseRatesAtom);

	useEffect(() => {
		if (data?.data.success)
			setBaseRates({ isLoading: isLoading, data: data.data });
		else {
			setBaseRates({ isLoading: isLoading });
		}
	}, [data, isLoading]);

	return (
		<MantineProvider withNormalizeCSS>
			<Header />
			<Converter />
		</MantineProvider>
	);
}

export default App;
