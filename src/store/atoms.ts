import { IRatesResponse } from 'api/apis/currencyApi';
import { atom } from 'recoil';

interface IDefaultBaseRatesAtom {
	isLoading: boolean;
	data?: IRatesResponse;
}

export const baseRatesAtom = atom<IDefaultBaseRatesAtom>({
	key: 'baseRates',
	default: { isLoading: false },
});
