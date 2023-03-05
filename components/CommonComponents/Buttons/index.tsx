import React, { useContext } from 'react';
import { sendLoginData, sendRegisterData } from '../../../components/CommonComponents/InputText';
import { ContextUser } from '../../Context/LogdataContext';

interface textInput {
    type?: string,
    name: string,
    fieldContent: string,
}

let Btn: any;

const Button = (datas: textInput) => {
    Btn = useContext(ContextUser);
    return (
        <button disabled={Btn.disableBtn} name={datas.name} id={datas.name} className={Btn.disableBtn ? 'w-[90%] ButtonSubmit ' : 'w-[90%] ButtonSubmit falseDisble HoverBtn'} onClick={datas.fieldContent == "Login" ? sendLoginData : sendRegisterData}>{datas.fieldContent}</button>
    );
};

export default Button