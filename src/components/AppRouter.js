import React from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {BrowserRouter as Switch,Route} from "react-router-dom";


const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

        </Switch>
    );
};

export default AppRouter;
