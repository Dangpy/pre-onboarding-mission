import React from "react";
import styled from "styled-components";

function SearchBar({ setValue }) {
  const handleOnChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  return (
    <SearchContainer>
      <SearchBarUi
        type="search"
        placeholder="영어로 입력해주세요"
        onChange={handleOnChange}
      />
      <SearchButton>
        <SearchIcon src="../../public/icn_search.png" alt="검색 아이콘" />
      </SearchButton>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  width: fit-content;
  display: flex;
  border: 3px solid black;
`;

const SearchBarUi = styled.input`
  width: 400px;
  height: 50px;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
