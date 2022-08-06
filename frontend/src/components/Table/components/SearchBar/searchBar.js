import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux"
import { applySearch } from "../../../../features/filters/filterSlice"

const SearchBar = () => {
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();
  return(
    <form>
      <TextField
        id="search-bar"
        className="text"
        value={search}
        onInput={(e) => {
          dispatch(applySearch(e.target.value));
        }}
        label="Ingresa un valor"
        variant="outlined"
        placeholder="Buscar..."
        size="small"
      />
    </form>
  )
}

export default SearchBar;