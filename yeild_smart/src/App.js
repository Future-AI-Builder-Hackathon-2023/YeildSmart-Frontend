import { Suspense } from 'react';
import './App.css';
import { BasicRoutesConfig, rolesConfig } from './Routes/Routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { ADMIN, USER } from './Utils/Constant';
import Loader from './Components/Loader/Loader';

function App() {
  let isAuthenticated = false;
  let userRole = ""
  let userData = sessionStorage.getItem("userData")
  if(userData){
    isAuthenticated=true;
    userRole=userData.role
  }
  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userRole === USER || sessionStorage.getItem("userRole") === USER) {
      routes = rolesConfig["user"];
    } else if (userRole === ADMIN) {
      routes = rolesConfig["Admin"];
    }
  }
  return (
    <Suspense fallback={<Loader  />}>
      <Routes>
        {BasicRoutesConfig.map((route, key) => {
          return route ? <Route key={key} {...route} /> : null;
        })}

        {isAuthenticated ? (
          <Route element={<Layout/>}>
            {routes?.routes.map((route, key) => {
              return route ? <Route key={key} {...route} /> : null;
            })}
          </Route>
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Suspense>
  );
}


export default App;
