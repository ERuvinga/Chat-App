import React from 'react';
import { sendLoginData, sendRegisterData } from '../../../components/CommonComponents/InputText';

interface textInput {
    type?: string,
    name: string,
    fieldContent: string,
}

const index = (datas: textInput) => {
    return (
        <button name={datas.name} id={datas.name} className='w-[90%] ButtonSubmit' onClick={datas.fieldContent == "Login" ? sendLoginData : sendRegisterData}>{datas.fieldContent}</button>
    );
};

export default index