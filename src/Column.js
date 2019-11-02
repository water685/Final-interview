import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme=>({
    header: {
        backgroundColor: props=>props.color,
        height: '30px',
        textAlign: 'center'
    }
}));


const Column = props => {
    const { data, onAdd } = props;
    const color = data.color;
    const classes = useStyle({color});
    const addWords = () =>{
        let words = prompt("Add card");
        const word = {words: words};
        onAdd(word);
    }

    return (<div style={{ width: '200px', height: '800px', backgroundColor: 'white'}}>
        <div className={classes.header}>{data.name}</div>
        <div>
            {data.cards.map(item=>{
                return <Card word={item.words} />
            })}
        </div>
        <div><button onClick={addWords}>{'+'}</button>Add a card</div>
    </div>)
};

export default Column;