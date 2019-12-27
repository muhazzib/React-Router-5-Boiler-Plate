import React, { Component } from 'react';
import '../App.css';
import {
    useHistory,
    useLocation,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom";
function Profile() {
    let { profile } = useParams();

    return (
        <div>
            <h1>{profile}</h1>
        </div>
    );
}
export default Profile;