import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ContextValue } from '../App';


function Header() {
    const { Theme, changeTheme } = useContext(ContextValue)

    return (
        <div className='Header'>
            <header className='header-light'>
                <ul>
                    <li>
                        <ReactSwitch onChange={changeTheme} checked={Theme === true}/>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
