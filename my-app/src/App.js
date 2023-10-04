import CharacteresCount from './CharacteresCount.js';
import CharacateresList from './CharacteresList.js';

function Title({ color = 'red', hidden = false }) {
  return (<h1 style={{color: color}}>Marvel APP </h1>);
}

function Para({ color = 'grey', hidden = false }) {
  return (<h3 style={{color: color}}>Les caracteres</h3>);
}


const characters = require("./data/characteres.json");
const character = characters[1];


function App() {
  return (
    <>
      <Title color="red" hidden />
 
      <Para color="black" hidden />
    
    
    <CharacateresList data={characters} /> 
    <p>Le nombre de characteres : <CharacteresCount data={characters} /> </p>

    <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}/>
    <p> {character.description} </p>
    </>
  );
}



export default App;
