import React from 'react';
import Column from './Column';
import produce from 'immer';

const cards = {
  Wine: {name: 'Wine',
  color: '#8E6E95',
  cards: [
    {words: 'ggogogogodsdsdsdssssssssssss'},
    {words: 'ggogogogodsdsdsdssssssssssss'},
  ]
},
  bob: {name: 'bob',
  color: '#39A59C',
  cards: [
    {words: 'ggogogogodsdsdsdssssssssssss'},
    {words: 'ggogogogodsdsdsdssssssssssss'},
  ]
},
  Thomas: {name: 'Thomas',
  color: '#344759',
  cards: [
    {words: 'ggogogogodsdsdsdssssssssssss'},
    {words: 'ggogogogodsdsdsdssssssssssss'},
  ]
},
  Geoges: {name: 'Geoges',
  color: '#E8741E',
  cards: [
    {words: 'ggogogogodsdsdsdssssssssssss'},
    {words: 'ggogogogodsdsdsdssssssssssss'},
  ]
}
}

const  App = ()=> {
  const [card, setCard] = React.useState(cards);

  const onAdd = name => words => {
    setCard(produce(draft=>{
      draft[name].cards.push(words);
    }));
  }
  return (
    <div style={{width: '925px', height: '100%', width: '100%', display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#ECEEEE'}}>
      {Object.values(card).map((item, index)=>{
        return (<Column data={item} onAdd={onAdd(item.name)}/>);
      })}
    </div>
  );
}

export default App;
