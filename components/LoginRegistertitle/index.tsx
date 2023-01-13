import React from 'react';

interface InputLoginRegister {
        title: string, 
        url : string,
}

const index = (datas : InputLoginRegister) => {
    return (
            <>
                <span className=' TitleLogReg'>{datas.title}</span>
                <img src={datas.url} alt='image' className='imgLogReg'/>
            </>
    );
};

export default index;