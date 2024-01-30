import React, { useEffect, useState } from "react";
import Input from "./component/input";


import "./App.css";

const per_page = 100;
function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("office");

  const getAPI = `https://api.unsplash.com/search/photos?page=3&per_page=${per_page}&query=${query}`;

  async function fetchAPI() {
    const api = await fetch(getAPI, {
      headers: {
        Authorization: "Client-ID GXoqnmfqbXLTTuAipAlSeGbzdMomNuSvgBRwgSzqUII",
      },
    });
    const data = await api.json();
    console.log(data.results);
    setImages(data.results);
  }
  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  function handleChange(event) {
    setSearch(event.target.value);
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <>
      <div className="input_section">
        <form onSubmit={handleSubmit}>
          <div className="textField">
            <input
              type="text"
              placeholder="Search something.."
              onChange={handleChange}
              value={search}
             className="Search_box"
            />
            <button className="SeachBtn">Search</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        {images.map((image) => {
          return <Input key={image.id} {...image} />;
        })}
      </div>
    </>
  );
}
export default App;
