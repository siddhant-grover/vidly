import React from "react";
import PropTypes from "prop-types";
function Paginate(props) {
  let length = Math.ceil(props.totalMovies / props.moviesPerPage);
  let arr = new Array(length).fill(0);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() => {
              props.paginate(props.currentPage - 1);
            }}
          >
            <a className="page-link" href="!#">
              Prev
            </a>
          </li>
          {arr.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  index + 1 === props.currentPage
                    ? "page-item active"
                    : "page-item"
                }
              >
                <a
                  className="page-link"
                  href="!#"
                  onClick={() => {
                    props.paginate(index + 1);
                  }}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
          <li
            className="page-item"
            onClick={() => {
              if (props.currentPage < length) {
                props.paginate(props.currentPage + 1);
              }
            }}
          >
            <a className="page-link" href="!#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
Paginate.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginate;
