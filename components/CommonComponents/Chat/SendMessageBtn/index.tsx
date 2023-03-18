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
                        messages: {
                            message: ChatContext.messageSender,
                            type: 'text',
                            hour: Date.now()
                        }
                    }
                    if (ChatContext.messageSender !== '') {
                        console.log(ChatContext.messageSender)
                        fetch(`${process.env.API_LINK}/api/conversations/newConversation/${ChatContext._idConversation}`, { // add new message in database with conversation
                            method: "PUT",
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json; charset=UTF-8',
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