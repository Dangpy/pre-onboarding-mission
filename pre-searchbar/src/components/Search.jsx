import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { dummy } from "../../../data";
import styled from "styled-components";

function Search() {
  const [searchData, setSearchData] = useState(dummy);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      const result = dummy.filter((item) => item.description.toLowerCase());
      setSearchData(result);
    } else {
      setSearchData([]);
    }
  }, [value]);

  return (
    <SearchContainer>
      <SearchBar setValue={setValue} />
      {value && <SearchResult searchData={searchData} value={value} />}
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
