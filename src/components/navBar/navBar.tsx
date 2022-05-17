import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import {HOME_PAGE, VERSION_PAGE} from "../../utils/const";
import './navBar.scss';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='att-logo' style={{cursor: "pointer"}} onClick={ () =>  navigate(HOME_PAGE)}>
                <div style={{display: 'flex', paddingRight: '17px'}}>
                    <img src={logo} alt='logo' />
                    <span className={'att-name'}>AT&T</span>
                </div>
                <span className={'app-name'}> | ZEPHYR</span>
            </div>

            <nav className={'navbar'}>
                <NavLink to={HOME_PAGE}>Home</NavLink>
                <NavLink to={VERSION_PAGE}>Version Management</NavLink>
            </nav>
        </>
    );
};

export default NavBar;