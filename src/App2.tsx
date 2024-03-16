import React, {useEffect} from 'react';
import './App.css'
import {NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams} from "react-router-dom";


const Profile4 = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get('name'))
    console.log(Object.fromEntries(searchParams))

    useEffect(() => {
        console.log('search...')
    }, [searchParams])


    return <div>
        profile
        <button onClick={() => {
            setSearchParams({...Object.fromEntries(searchParams), age: '23'})
        }}>add age</button>
    </div>
}
export const App4 = () => {
    return (
        <div>
            <NavLink to={'/'}>main</NavLink> ----
            <NavLink to={'/login'}>login</NavLink> ----
            <NavLink to={'/profile'}>profile</NavLink> ----

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div><Profile4/></div>}/>
            </Routes>
        </div>
    )
}


const Profile3 = () => {
    const navigate = useNavigate()

    return (
        <div>
            profile
            <button onClick={() => {
                navigate('./login')
            }}>Logout</button>
        </div>
    )
}
export const App3 = () => {
    return (
        <div className={'App'}>
            <NavLink to={'/'}>main </NavLink> ----
            <NavLink to={'/login'}>login </NavLink> ----
            <NavLink to={'/profile'}>profile </NavLink> ----
            <NavLink to={'/profile/settings'}>settings </NavLink> ----

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div><Profile3/></div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    )
}


const Profile2 = () => {
    const params = useParams<'id'>()
    const some = params.id
    console.log(some)

    return <div>profile</div>
}
export const App2 = () => {
    return (
        <div className='App'>
            <NavLink to={'/'}>main </NavLink> ----
            <NavLink to={'/login'} style={(params) => {
                return {color: params.isActive ? 'lime' : 'black'}
            }}>
                login </NavLink> ----
            <NavLink to={'/profile'}>profile </NavLink> ----
            <NavLink to={'/profile/settings'}
                     className={({isActive}) => isActive ? 'act' : 'def'}
            >settings </NavLink> ----

            <a href={'https://github.com/adisovaa'}
               target={'_blank'}
               rel={'noreferrer nofollow nooper'}
            >link</a>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/:id'} element={<Profile2/>}/>
            </Routes>
        </div>
    )
}