import React from "react";
import SearchResultsTable from "./SearchResultsTable";
import { useState } from "react";

const SearchForm = ({ search, searchResults }) => {
  const [searchInput, setSearchInput] = useState("hello");
  const submitHandler = (e) => {
    e.preventDefault();
    search(searchInput);
  };
  return (
    <div id="search" className="ml-3 tab-pane fade">
      <br />
      <form id="searchform" onSubmit={submitHandler}>
        <div className="form-group w-25 ml-3">
          <label htmlFor="studentid">Student Id</label>
          <input
            type="number"
            id="studentid"
            placeholder="studentid"
            required
            className="form-control"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary ml-3 w-25">
          Search
        </button>
      </form>
      <br />
      <br />
      <SearchResultsTable searchResults={searchResults} />
    </div>
  );
};

export default SearchForm;
