import React from "react";
import { useState } from "react/cjs/react.development";

function Search({ onChangeSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);

    onChangeSearch(search)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
