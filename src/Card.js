import React from 'react';

const Card = props => {
    const {word} = props;
    return (<div style={{textAlign: 'center', height: '50px', width: '100%', display: 'inline-block', wordBreak: 'break-all', backgroundColor: 'grey'}}>
        {word}
    </div>);
}

export default Card;