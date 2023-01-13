import React from 'react';

interface textInput {
    type : string,
    name : string,
    fieldContent : string,
    HandleChange: () => void 
}

const index = (datas : textInput) => {
    return (
        <div className='InputText '>
            <label htmlFor={datas.name} className='LabelField'>{datas.fieldContent}</label>
            <input name={datas.name} type={datas.type} id={datas.name} className='InputField'/>
        </div>
    );
};

export default index;