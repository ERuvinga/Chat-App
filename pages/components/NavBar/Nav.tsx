import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Color from '../../../styles/colors';

const DataLinks =[
    {
        content: 'Home',
        picture: '',
        link : '#'
    },

    {
        content: 'Profil',
        picture: '',
        link: '#'
    }
]

const NavLabel = styled.nav`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-top: 10px;
    background-color:white;
    padding : 10px 30px;
`
const NavBarStyle = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:180px;
    padding: 20px 0;
`
const LinkStyle = styled(Link)`
    color: ${Color.Navtext};
    text-decoration: none;
    text-align: center;
    padding: 5px 0px;
    font-size: 1em;
    
`
const Nav = () => {
    return (
        <NavLabel >
            <img alt='logo' src='/favicon.png' className='logo'/> 
            <NavBarStyle >
                {DataLinks.map((datas, index)=> <LinkStyle href={datas.link}  key={index}>{datas.content}</LinkStyle>)}
            </NavBarStyle> 
        </NavLabel>
            );
};

export default Nav;