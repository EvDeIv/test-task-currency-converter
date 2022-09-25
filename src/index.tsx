import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);
