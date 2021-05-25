import React,{useState} from 'react';
import Heart from './heart';
import {getMovies} from '../services/fakeMovieService'
import Paginate from '../Components/Paginate';

function Movies(props) {
        
const [arr,setArr] = useState(getMovies());
const[pageNumber,setPageNumber] = useState(1);
if(arr.length===0){
    return( <main className="container"><p>no movies in DB</p></main>)
}  
const moviesPerPage = 3;

function paginate(pageNo){
    console.log(pageNo)
  setPageNumber(pageNo);
}


let endIndex = pageNumber*moviesPerPage;
let startIndex =endIndex - moviesPerPage;
let sliceOfArray = arr.slice(startIndex,endIndex)


return (

  <main className="container">
    
     <p>Showing {arr.length} movies in the database .</p>
      <table className="table"> 
        <thead>
          <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
        </tr>
        </thead>
        <tbody>
    {
      sliceOfArray.map((movie,index)=>{
        return(
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><Heart/></td>
          <td><button className="btn btn-danger btn-sm" onClick={()=>{
            setArr(arr.filter((movie,i)=>{return i!==index}))
          }}>DELETE</button></td>
        </tr>
        )
      })
    }
    </tbody>
    </table>
    <Paginate totalMovies={arr.length} moviesPerPage={moviesPerPage} paginate={paginate} currentPage={pageNumber}/>
  </main>
)
           
}

export default Movies;

