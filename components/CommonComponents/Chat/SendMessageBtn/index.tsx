import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// contexts
import { contextChat } from '../../../Context/ChatContext';
import { UsersChatContext } from '../../../Context/UserContext';
import { socketIoContext } from '../../../Context/socket';

interface dataIcone {
    icone: any
    _idOtherUser?: any,
    full?: boolean
}

let ChatContext: any;
let userContext: any;
let IoContext: any;

const Index = (datas: dataIcone) => {
    ChatContext = useContext(contextChat);
    userContext = useContext(UsersChatContext);
    IoContext = useContext(socketIoContext);

    return (
        <div className={datas.full ? '' : 'flex justify-center items-center'}>
            <FontAwesomeIcon className={datas.full ? 'p-2 sendMessagebtn' : 'p-2 iconeBtns'}
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
                        ChatContext.InputMessage.value = ''; // delete content in texteare
                        console.log(ChatContext.messageSender);

                        // context Event 

                        fetch(`${process.env.API_LINK}/api/conversations/NewMessage/${ChatContext._idConversation}`, { // add new message in database with conversation
                            method: "PUT",
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json; charset=UTF-8',
                                "Autorization": `Bearer ${localStorage.getItem('Token')}`
                            },

                            body: JSON.stringify({ dataOfMessage: dataOfMessage, lengthConver: ChatContext.messageContent.length, _idOtherUser: userContext.OtherUser._id })
                        })
                            .then(() => {
                                IoContext.socketIo.emit('New_Message', { Other: userContext.OtherUser._id, Owner: userContext.OtherUser.userId }); //Notification server New Message
                                ChatContext.setMsgBlocReload(1 - ChatContext.msgBlocReload);
                            })
                            .catch((error) => console.log(error))
                    }

                } : () => null} />
        </div>
    );
};

export default Index;