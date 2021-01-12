import React,{ useContext} from "react";
import EmpContext from '../utils/EmpContext'

function Search(props) {

const {emp} = useContext(EmpContext)

    
  return (
    <div className="container main text-center bg-light py-3">
      <form>
     
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control col-md-3 mx-auto text-center"
          placeholder="Search for an employee"
          id="search"

        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
