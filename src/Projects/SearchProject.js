import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined as SearchOutlinedIcon } from "@mui/icons-material";

function SearchProject() {
  return (
    <TextField
      placeholder="Search project"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchOutlinedIcon />
          </InputAdornment>
        )
      }}
    />
  );
}

export default SearchProject;
