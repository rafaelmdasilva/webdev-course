import React, { useState } from 'react';

const HPComponent = () => {
  const url = 'https://hp-api.onrender.com/api/characters/students';

  const [name, setName] = useState('Harry Potter');
  const [house, setHouse] = useState('Gryffindor');
  const [alive, setAlive] = useState(true);
  const [altNames, setAlt] = useState([
    'The Boy Who Lived',
    'The Chosen One',
    'Undesirable No. 1',
    'Potty',
  ]);
  const [wand, setWand] = useState({
    wood: 'holly',
    core: 'phoenix tail feather',
    length: 11,
  });

  const randomizeFunction = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataLength = Object.keys(data).length;
        let random = Math.round(Math.random() * dataLength);
        // caps random to object length
        // random = 100
        setName(data[random].name);
        setHouse(data[random].house);
        setAlive(data[random].alive);
        setAlt(data[random].alternate_names);
        setWand(data[random].wand);
      });
  };

  const altNamesFunction = () => {
    return altNames.map((arrayName, index) => <li key={index}>{arrayName}</li>);
    //mapping array items
  };
  const wandFunction = () => {
    return Object.entries(wand).map(([objectKey, objectProperty], index) => (
      <li key={index} style={{ textTransform: 'capitalize' }}>
        {objectKey}: {objectProperty}
      </li>
    ));
    //mapping object items
  };

  return (
    <div className='HP-container'>
      <h4>Name: {name}</h4>
      {altNames.length > 0 ? (
        <>
          <h4>Aliases: </h4>
          <ul>{altNamesFunction()}</ul>
        </>
      ) : null}
      {/* checks if array is empty */}
      <h4>House: {!house ? 'No Affiliation' : house}</h4>
      {wand['wood'].length > 0 ? (
        <>
          <h4>Wand: </h4>
          <ul>{wandFunction()}</ul>
        </>
      ) : null}
      {/* checks if the object 'wand', key 'wood' is empty */}
      <h4>Status: {alive ? 'Alive' : 'Deceased'}</h4>
      <button className='HP-button' onClick={randomizeFunction}>
        Randomize
      </button>
    </div>
  );
};

export default HPComponent;
