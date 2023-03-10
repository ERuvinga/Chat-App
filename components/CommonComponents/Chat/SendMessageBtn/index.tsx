import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contextChat } from '../../../Context/ChatContext';

interface dataIcone {
    icone: any
    full?: boolean
}

let ChatContext: any;

const Index = (datas: dataIcone) => {
    ChatContext = useContext(contextChat);

    return (
        <div className={datas.full ? '' : 'flex justify-center items-center'}>
            <FontAwesomeIcon className={datas.full ? 'sendMessagebtn' : 'iconeBtns'}
                icon={datas.icone}
                onClick={datas.full ? () => {
                    console.log(ChatContext.messaContent);
                } : () => null} />
        </div>
    );
};

export default Index;