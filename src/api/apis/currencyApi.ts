import api from '../config';

export type TCurrencyName = string;
export interface ICurrencyQuery {
	firstCurrency: string;
	secondCurrency: string;
}

export interface IRatesResponse {
	base: string;
	success: boolean;
	rates: {
		[key: string]: number;
	};
}

export interface ICurrentRateResponse {
	result: number;
}

export const currencyApi = {
	getCurrencyRates: (currencyName: TCurrencyName) =>
		api.get<IRatesResponse>(`/latest?base=${currencyName}`),
	getCurrentRate: ({ firstCurrency, secondCurrency }: ICurrencyQuery) =>
		api.get<ICurrentRateResponse>(
			`/convert?from=${firstCurrency}&to=${secondCurrency}`
		),
};
