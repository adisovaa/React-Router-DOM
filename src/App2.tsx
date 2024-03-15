import React from 'react';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

export const App2 = () => {

    return (
        <div className='App'>
            <NavLink to={'/'}>main </NavLink>
            <NavLink to={'/login'}>login </NavLink>
            <NavLink to={'/profile'}>profile </NavLink>
            <NavLink to={'/settings'}>settings </NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        profile
                        <Outlet/>
                    </div>
                )}>
                    <Route element={<div>settings</div>}/>
                </Route>
                {/*<Route path={'*'} element={<div>page not found</div>}/>*/}
                <Route path={'*'} element={<div>page not found</div>}/>
                <Route path={':id'} element={<div>page not found</div>}/>
            </Routes>
        </div>
    )
}