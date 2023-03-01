//natives modules

import React, { useContext, useState } from 'react';
import Nav from '../../components/NavBar/Nav';

import Head from '../../components/CommonComponents/Head';
import LoginForm from '../../components/Forms/Login'

// context modules
import ProviderContextUser from '../../components/Context/LogdataContext';


const Login = () => {
    return (
        <>
            <Head />
            <div className='containerG'>
                <Nav />
                <ProviderContextUser>
                    <LoginForm />
                </ProviderContextUser>

            </div>
        </>
    );
};

export default Login; 