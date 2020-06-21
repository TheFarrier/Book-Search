import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div key={props.index}>
      <ul className="list-group search-results">
        <li className="list-group-item">
          <span>
            <button onClick={props.saveBook} onClick={(event)=> event.target.textContent='SAVED!'} style={props.saveBook ? {display:"block", float:"right"} : {display:"none"}}>Save</button>
            <button onClick={props.deleteBook} style={props.deleteBook ? {display:"block", float:"right"} : {display:"none"}}>Delete</button>
            <a href={props.link} style= {{float:"right"}} ><button>View</button></a>
          </span>
          <h2>{props.title}{props.subtitle ? " : " + props.subtitle : ""} </h2>
          <h3>{props.author}</h3>
          <img src={props.image} ></img>
          <p>{props.description}</p>
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;
