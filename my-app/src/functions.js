function NombreCharacteres(heros){
    return (heros.length);}
    
    function ListCharacateres (heros){
      return <ul> { heros.map((heros, index) => ( <li key= {index}> {heros.name}</li>  ))};
    </ul> }