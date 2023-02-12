import React from 'react';

interface textInput {
    type: string,
    name: string,
    fieldContent: string,
    HandleChange: () => void,
    addLabel: boolean
}

const index = (datas: textInput) => {
    return (
        <div className='InputText w-[90%] '>
            {datas.addLabel ? <label htmlFor={datas.name} className='LabelField'>{datas.fieldContent}</label> : null}
            <input name={datas.name} type={datas.type} id={datas.name} className='InputField' />
        </div>
    );
};

export default index;