import React, { useState } from "react";
import './App.css';

export default function App(props) {
  let [keyword, setKeyword] = useState(props.default);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

let searchForm = (
  <div className="row row-dictionary">
            <h1><span className="title-d">:D</span><span className="title">ictionary</span></h1>
            <div className="input-group mb-3" onSubmit={handleSubmit}>
             <button>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
             </svg>
             </button>
              <input
                type="search"
                onChange={handleKeyword}
                autoFocus="on"
                className="form-control"
                placeholder="type a word"
                value={keyword}
              />
          </div>
          </div>
);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container container-app">
          <div className="row row-toggle">
            <img src="https://cdn-icons-png.flaticon.com/512/5720/5720464.png" className="toggle-image" alt="toggle"/>
          </div>
          <div>{searchForm}</div>
          <div className="row row-footer">
            <p>Created by <a href="https://www.linkedin.com/in/perehuda/" target="_blank" rel="noreferrer">Viktoriia Perehuda</a>,</p>
            <p><a href="https://github.com/tourdesegur/DictionaryNew" target="_blank" rel="noreferrer">GitHub code</a></p>
          </div>
        </div>
      </header>
      <span className="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
        </svg>
      </span>
    </div>
  );
}

