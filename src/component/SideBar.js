import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class SideBar extends Component {
   render(){
    return (
<div className="pos-f-t">
    <div className="collapse" id="navbarToggleExternalContent">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse" id="navbarToggleExternalContent">
            <ul className="navbar-nav my-2 mt-lg-0">
                <li className="nav-item active">
                    <NavLink exact to="/"className="btn btn-outline-light my-2 my-sm-0 margin">Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink to="/capture" className="btn btn-outline-light my-2 my-sm-0 margin">Capture</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    <nav className="navbar navbar-dark bg-dark spetialForIENavBar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="display-4 title"><strong>Pokedex</strong></h1>
    </nav>
</div>
    )
}
}