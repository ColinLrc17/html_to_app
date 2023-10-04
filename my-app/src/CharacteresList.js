function CharacateresList ({data}){
    return <ul> { data.map((data, index) => ( <li key= {index}> {data.name}</li>  ))}</ul>;
   }
export default CharacateresList;