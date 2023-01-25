import { Routes as AppRoutes, Route, BrowserRouter } from 'react-router-dom';

import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import Error404 from './pages/Error404';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<AppRoutes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="*" element={<Error404 />} />
			</AppRoutes>
		</BrowserRouter>
	);
};