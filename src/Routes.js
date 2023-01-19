import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage/>,
		errorElement: <Error404 />,
	},
	{
		path: 'about',
		element: <AboutPage />,
	},
	{
		path: 'faq',
		element: <FaqPage />,
	},
]);

export const Routes = () => <RouterProvider router={router} />;