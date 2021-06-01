import React from "react"; //bootstrap listGroup component

export default function ListGroup(props) {
  return (
    <>
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={() => {
            props.genreSelect("All Genres");
          }}
        >
          All Genres
        </li>

        {props.genreList.map((item) => {
          return (
            <li
              key={item._id}
              className="list-group-item"
              onClick={() => {
                props.genreSelect(item.name);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
