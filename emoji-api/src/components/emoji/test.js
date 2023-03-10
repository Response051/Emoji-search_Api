import React, { useEffect, useState } from "react";
import emojiData from "./emoji.json";

function Emoji() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <div className="input">
        <h1>Emoji Search</h1>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
    </div>
  );
}
export default Emoji;
