import React from 'react';
import Head from '../../components/CommonComponents/Head';
import ChatUSer from '../../components/UsersChat'

const index = () => {
    return (
        <>
            <Head/>
            <div className=' container mx-auto h-screen bg-[#F9F9FC] flex flex-row justify-between'>
                <aside className='border list-users h-screen '>
                    <ChatUSer Name='Elie Ruvinga' descriptions='Developper' picture='/4.jpeg'/>
                </aside>
                <section className=' h-screen chat-contents bg-[#fff]' >

                </section>
            </div>
        </>
    );
};

export default index;