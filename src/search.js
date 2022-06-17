import React, { useState } from "react";
import Weather from "./weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [searchingLine, setSearchingLine] = useState("");
  function handelSearch(event) {
    event.preventDefault();
    showSearch();
  }

  function searching(event) {
    setCity(event.target.value);
  }
  function showSearch() {
    setSearchingLine(<Weather city={city} />);
  }

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search A City here"
          onChange={searching}
        />
        <input type="submit" value="search" onClick={handelSearch} />
      </form>
      {searchingLine}
    </div>
  );
}
