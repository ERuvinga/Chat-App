import React from 'react';
import Nav from '../../components/NavBar/Nav'
import Head from '../../components/CommonComponents/Head'

import ContextError from '../../components/Context/LogdataContext'
import RegisterForm from '../../components/Forms/Register'

const index = () => {
    return (
        <>
            <Head />
            <div className='containerG'>
                <Nav />
                <ContextError>
                    <RegisterForm />
                </ContextError>
            </div>
        </>
    );
};

export default index;