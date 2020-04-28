import React, { Component } from 'react';
//287914
class Header extends Component  {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Smiley</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/auth/google"> Login with Google</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Header;