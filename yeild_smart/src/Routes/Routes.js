import React from "react";

const Home = React.lazy(() => import("../Components/Home/Home"));
const Login = React.lazy(() => import("../Components/Login/Login"));

const components = {
	Home: {
		path: "/",
		name: "home",
		element: <Home />,
	},
    Login: {
		path: "/login",
		name: "login",
		element: <Login />,
	},
};
const rolesConfig = {
	Admin: {
		routes: [

		],
	},
	user: {
		routes: [

        ],
	},
};
const BasicRoutesConfig = [
	components.Login,
    components.Home
];
export { rolesConfig, BasicRoutesConfig };