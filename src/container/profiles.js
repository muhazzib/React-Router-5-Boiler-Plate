import React, { Component, useState } from 'react';
import '../App.css';
import { withRouter, Link, Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import { fakeAuth } from '../auth';
import Profile from './profile';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
function Profiles() {
    let { path, url } = useRouteMatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const profiles = [{ name: 'muhazzib', id: 1 }, { name: 'ali', id: 2 }, { name: 'bilal', id: 3 }]
    console.log(path, 'path');
    console.log(url, 'url');
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    {
                        profiles.map((value) => (
                            <>
                                <Link to={`${url}/${value.id}`}>{value.name}</Link>
                                <br />
                            </>
                        ))
                    }
                </Route>
                <PrivateRoute path={`${path}/:profile`}>
                    <Profile />
                </PrivateRoute>
            </Switch>
        </div>
    );
}
export default Profiles;