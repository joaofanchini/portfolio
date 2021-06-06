import React from 'react';
import './Navigation.scss'
import {VscColorMode} from 'react-icons/vsc';
import {AiOutlineMenu} from 'react-icons/ai'


const Navigation:React.FC<any> = () =>{
    return (
        <nav className='navigation-menu'>
            <span className='navigation-menu-logo'>João Victor</span>
            <ul className='navigation-menu-itens'>
                <li><VscColorMode size={25}/></li>
                <li><AiOutlineMenu size={25}/></li>
            </ul>
        </nav>
    );
}

export default Navigation;