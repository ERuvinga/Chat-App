import React from 'react';

interface textInput {
    type: string,
    name: string,
    fieldContent: string,
}

const index = (datas: textInput) => {
    return (
        <button name={datas.name} id={datas.name} className='ButtonSubmit w-[90%]'>{datas.fieldContent}</button>
    );
};

export default index