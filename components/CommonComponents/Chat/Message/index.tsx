
interface contentMessage {
    message: '',
    SenderId: '',
}

const messageComponent = (datas: contentMessage) => {
    return (
        <>
            <div className="border ">{datas.message}</div>
        </>
    )
}

export default messageComponent;