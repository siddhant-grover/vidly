import React, { useState } from "react";
import Heart from "./heart";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Paginate from "../Components/Paginate";
import ListGroup from "./ListGroup";
import _ from 'lodash'
function Movies(props) {
  const [arr, setArr] = useState(getMovies());
  const [pageNumber, setPageNumber] = useState(1);
  let [filtered, setFiltered] = useState([]);
  const [order,setOrder] = useState('asc')
  const moviesPerPage = 3;
  if (arr.length === 0) {
    return (
      <main className="container">
        <p>no movies in DB</p>
      </main>
    );
  }
  function paginate(pageNo) {
    if (pageNo > 0) {
      setPageNumber(pageNo);
    }
  }

  const genreList = getGenres();
  function genreSelect(genre) {
    if (genre === "All Genres") {
      setFiltered(arr);
      return;
    }
    setFiltered(
      arr.filter((item) => {
        return item.genre.name === genre;
      })
    );
    console.log(genre);
    setPageNumber(1);
  }

  let endIndex = pageNumber * moviesPerPage;
  let startIndex = endIndex - moviesPerPage;
  let sliceOfArray =
    filtered.length > 0
      ? filtered.slice(startIndex, endIndex)
      : arr.slice(startIndex, endIndex);

  function onSort(path){  
    if(order==="asc"){
      setOrder('desc')
    }
    else{
      setOrder('asc')
    }
    filtered.length>0?setFiltered(_.orderBy(filtered, [path], [order])):setArr(_.orderBy(arr, [path], [order]))
    console.log(path)
  }

console.log(arr)
  return (
    <>
      <div className="row">
        <div className="col-3">
          <ListGroup genreList={genreList} genreSelect={genreSelect} />
        </div>

        <div className="col">
          <p>
            Showing {filtered.length > 0 ? filtered.length : arr.length} movies
            in the database .
          </p>
          <table className="table">
            <thead>
              <tr>
                <th onClick={()=>onSort('title')}>Title</th>
                <th onClick={()=>onSort('genre.name')}>Genre</th>
                <th onClick={()=>onSort('numberInStock')}>Stock</th>
                <th onClick={()=>onSort('dailyRentalRate')}>Rate</th>
              </tr>
            </thead>
            <tbody>
              {sliceOfArray.map((movie, index) => {

                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Heart />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          filtered.length > 0 &&
                            setFiltered(
                              filtered.filter((movie, i) => {
                                return i !== index;
                              })
                            );

                          setArr(
                            arr.filter((m, i) => {
                              return m.title !== movie.title;
                            })
                          );
                          console.log(arr);
                        }}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Paginate
            totalMovies={filtered.length > 0 ? filtered.length : arr.length}
            moviesPerPage={moviesPerPage}
            paginate={paginate}
            currentPage={pageNumber}
          />
        </div>
      </div>
    </>
  );
}

export default Movies;
