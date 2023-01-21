import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const DataLinks =[
    {
        content: 'Home',
        picture: faHome,
        link : '/'
    },

    {
        content: 'Profil',
        picture: faUserAlt,
        link: '/Login'
    }
]

const Nav = () => {
    return (
        <nav className='border-b container mx-auto flex flex-row px-10 py-2 mt-4 items-center justify-between'>
            <img alt='logo' src='/favicon.png' className='logo '/> 
            <div className='iconeNavBar'>
                {DataLinks.map((datas, index)=> 
                    <Link 
                        href={datas.link}  
                        key={index}>
                        {      
                            <FontAwesomeIcon className='icones' icon={datas.picture}/>
                         }
                    </Link>)}
            </div> 
        </nav>
            );
};

export default Nav;