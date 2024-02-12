import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton>
        <Search />
      </IconButton>
      <div
        style={{
          height: "60%",
          borderLeft: "1px solid #e3e3e3",
          margin: "0 10px",
        }}
      />
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value=""
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p:'10px', color: 'red'}}>
          <Search/>
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
