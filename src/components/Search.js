import React from "react";
 

function Search(props) {

 
    
  return (
    <div className="container main text-center bg-light py-3">
      <form
      onSubmit={props.handleSearchChange}
      >
     
        <input
          onChange={props.handleInputChange}
          value={props.Search}
          name="search"
          type="text"
          className="form-control col-md-3 mx-auto text-center"
          placeholder="Search for an employee"
          id="search"

        />
        <button
         type="submit"
         
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
