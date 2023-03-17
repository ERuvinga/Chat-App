import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contextChat } from '../../../Context/ChatContext';

interface dataIcone {
    icone: any
    _idOtherUser?: any,
    full?: boolean
}

let ChatContext: any;

const Index = (datas: dataIcone) => {
    ChatContext = useContext(contextChat);

    return (
        <div className={datas.full ? '' : 'flex justify-center items-center'}>
            <FontAwesomeIcon className={datas.full ? 'sendMessagebtn' : 'iconeBtns'}
                icon={datas.icone}
                onClick={(datas.full && datas._idOtherUser != null) ? () => {

                    const dataOfMessage = {
                        members: {
                            owner: '',
                            otherUser: datas._idOtherUser
                        },
                        messages: {
                            message: ChatContext.messaContent,
                            type: 'text',
                        }
                    }
                    if (ChatContext.messaContent !== '') {
                        console.log(ChatContext.messaContent)
                        fetch(`${process.env.API_LINK}/api/conversations/newMessage`, {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json;charset=UTF-8',
                                "Autorization": `Bearer ${localStorage.getItem('Token')}`
                            },

                            body: JSON.stringify({ dataOfMessage })
                        })
                            .then((response) => {
                                console.log(response);
                            })
                            .catch((error) => console.log(error))
                    }
                } : () => null} />
        </div>
    );
};

export default Index;