"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  onAdd?: () => void;
  addButtonLabel?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Buscar...",
  onAdd,
  addButtonLabel = "Agregar",
}) => {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        mb: "25px",
      }}>
      <form className='t-search-form'>
        <label>
          <i className='material-symbols-outlined'>search</i>
        </label>
        <input
          type='text'
          className='t-input'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>

      <Button
        onClick={onAdd}
        variant='outlined'
        sx={{
          textTransform: "capitalize",
          borderRadius: "7px",
          fontWeight: "500",
          fontSize: "13px",
          padding: "6px 13px",
        }}
        color='primary'>
        <AddIcon sx={{ position: "relative", top: "-1px" }} /> {addButtonLabel}
      </Button>
    </Box>
  );
};

export default SearchBar;
