import "./Message.css"
function Message(props) {
    return (
        <div className="msg-container">
            <h2 className="">{props.title} </h2>
            <p>{props.msg}</p>
            <small>{`By ${props.by}`}</small>
        </div>
    )
}

export default Message;
