import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsActionSearch } from "../../redux/actions/ProductActions";

function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchProduct = (e) => {
    dispatch(productsActionSearch(search));
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          searchProduct();
        }}
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}

export default Search;
