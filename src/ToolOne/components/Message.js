import React from 'react';

const Message = (props) => {
    const { text } = props;

    return(
        <div>{text}</div>
    );
};

export default Message;
