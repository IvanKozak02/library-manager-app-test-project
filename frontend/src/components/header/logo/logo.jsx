import React from 'react';
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <Link className="header__logo" to="/">
            Books App
        </Link>
    );
};

export default Logo;