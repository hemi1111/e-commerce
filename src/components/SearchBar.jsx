import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { CartContext } from "../context/CartContext";

const SearchComponent = () => {
  const { isSearching, setIsSearching } = useContext(CartContext);
  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    setIsSearching(false);
  };

  return (
    <div>
      {isSearching ? (
        <InputBase
          placeholder="Search..."
          onBlur={handleSearchBlur}
          autoFocus
        />
      ) : (
        <IconButton onClick={handleSearchClick}>
          <SearchIcon />
        </IconButton>
      )}
    </div>
  );
};

export default SearchComponent;
