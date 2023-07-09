import React from "react";
import NotFound from "../Components/404_NotFound/NotFound";

const Home = React.lazy(() => import("../Components/Home/Home"));
const Login = React.lazy(() => import("../Components/Login/Login"));
const Yeild = React.lazy(() => import('../Components/Predict/Yeild'));

  
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
	NotFound: {
		path:"*",
		name:"Not Found",
		element:<NotFound/>
	},
	Yeild : {
		path:'/predictCrop',
		name:"Yeild Smart",
		element:<Yeild/>
	}
};
const rolesConfig = {
	Admin: {
		routes: [
			components.Yeild,
		],
	},
	user: {
		routes: [
			components.Yeild,
        ],
	},
};
const BasicRoutesConfig = [
	components.Login,
    components.Home,
	components.NotFound,
	components.Yeild,
	
];
export { rolesConfig, BasicRoutesConfig };