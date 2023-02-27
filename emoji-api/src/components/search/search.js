import React, { useState } from "react";
import { Data } from "../emoji/emoji";

function Search() {
  const [search, setSearch] = useState();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  // add a unique identifier to each objects in the array
  const dataWithKeys = Data.map((item, index) => ({
    ...item,
    id: index,
  }));
  // filtered array based on conditions
  // item.title.toLocaleLowerCase().includes(search)
  const filteredData = dataWithKeys.filter((item) =>
    item.title.toLowerCase() === ""
      ? item
      : item.title.toLowerCase().includes(search)
  );
  return (
    <div>
      <label htmlFor="search">
        <input
          id="search"
          placeholder="Search Emoji"
          type="text"
          onChange={handleSearch}
        />
      </label>

      <div>
        {filteredData.map((item) => (
          <div>
            <p>
              {item.title} <span>{item.symbol}</span>
            </p>
          </div>
        ))}
      </div>
      {Data.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} <span>{item.symbol}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Search;
