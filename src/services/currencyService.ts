import { useMutation, useQuery } from 'react-query';
import {
	currencyApi,
	ICurrencyQuery,
	TCurrencyName,
} from '../api/apis/currencyApi';

function useBaseCurrency(value: TCurrencyName) {
	return useQuery(['BASE_RATE'], () => currencyApi.getCurrencyRates(value));
}

function useCurrentRate() {
	return useMutation((query: ICurrencyQuery) =>
		currencyApi.getCurrentRate(query)
	);
}

export { useBaseCurrency, useCurrentRate };
