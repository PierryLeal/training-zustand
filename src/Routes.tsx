import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "*",
		element: <div>Pagina não encontrada</div>,
	},
]);

const Routes: React.FC = () => {
	return (
		<Suspense fallback='...LOADING'>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default Routes;
