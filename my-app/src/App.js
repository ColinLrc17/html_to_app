function Title({ color = 'red', hidden = false }) {
  return (<h1 style={{color: color}}>Marvel APP </h1>);
}

function Para({ color = 'grey', hidden = false }) {
  return (<h3 style={{color: color}}>Les caracteres</h3>);
}


const characters = require("./data/characteres.json");

function NombreCharacteres(){
return (characters.length);}

function ListCharacateres (){
  return <ul> { characters.map((characters, index) => ( <li key= {index}> {characters.name}</li>  ))}</ul>;
 }


function App() {
  return (
    <>
      <Title color="red" hidden />
 
      <Para color="black" hidden />
    
    
    <ListCharacateres /> 
    <p>Le nombre de characteres : <NombreCharacteres /> </p>


    </>

  );
}



export default App;
