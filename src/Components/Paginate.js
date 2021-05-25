import React from 'react';

function Paginate(props) {
    let length = Math.ceil(props.totalMovies/props.moviesPerPage)
    let arr = new Array(length).fill(0);
    
    return (
        <div>
            <nav aria-label="Page navigation example">
  <ul className="pagination">
  <li className="page-item"><a className="page-link" href="!#">Prev</a></li>
      {
          arr.map((item,index)=>{
              return (<li key={index} className="page-item"><a className="page-link" href="!#" onClick={()=>{props.paginate(index+1)}}>{index+1}</a></li>)
          })
      }
      <li className="page-item"><a className="page-link" href="!#">Next</a></li>
    
   
  </ul>
</nav>
        </div>
    );
}

export default Paginate;

