import { Suspense } from 'react';
import './App.css';
import { BasicRoutesConfig, rolesConfig } from './Routes/Routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { ADMIN, USER } from './Utils/Constant';

function App() {
  let isAuthenticated = true;
  let userRole = ""
  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userRole === USER || sessionStorage.getItem("userRole") === USER) {
      routes = rolesConfig["user"];
    } else if (userRole === ADMIN) {
      routes = rolesConfig["Admin"];
    }
  }
  return (
    <Suspense fallback={<div>Loader</div>}>
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
