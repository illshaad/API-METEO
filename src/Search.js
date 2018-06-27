import React from 'react'

const Search = (props)=>{
return(
  <main>
    <input type='text' onChange={props.chouette}/>
    <button onClick={props.ville}>Search</button>
  </main>
)
}

export default Search
