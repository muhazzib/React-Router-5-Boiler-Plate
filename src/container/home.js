import React, { Component, useState } from 'react';
import '../App.css';
import { withRouter, Link, Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import { fakeAuth } from '../auth';
import Profiles from './profiles';
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
function Home() {
    let { path, url } = useRouteMatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const profiles = [{ name: 'muhazzib', id: 1 }, { name: 'ali', id: 2 }, { name: 'bilal', id: 3 }]
    console.log(path, 'path');
    console.log(url, 'url');
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <Link to='/profiles'>Go to Profiles</Link>
                </Route>
                <PrivateRoute path={`/profiles`}>
                    <Profiles />
                </PrivateRoute>
            </Switch>
        </div>
    );
}
export default Home;