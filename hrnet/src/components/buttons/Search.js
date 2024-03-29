import React, { useState, useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      searchInputRef.current.value = "";
      searchInputRef.current.focus();
    }
  };

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleClear = () => {
    onSearch("");
  };//permet de clear le tri du tableau quand on clique sur la croix

  return (
    <div className="bloc-search">
      <form
        className={`search${searchOpen ? " show-search" : ""}`}
        id="search-bar"
      >
        <input
          type="search"
          placeholder="Search name ..."
          className="search__input"
          ref={searchInputRef}
          onChange={handleSearchChange}
          id="searchEmployee" 
          name="searchEmployee"
        />
        <div
          className="search__button"
          id="search-button"
          onClick={handleToggleSearch}
        >
          <i className="search__icon ri-search-2-line"></i>
          <i className="search__close ri-close-line" onClick={handleClear}></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;