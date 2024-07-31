import React from "react";
import styled from "styled-components";
import { useHighlightText } from "../utils/useHighlightText";

function SearchResult({ searchData, value }) {
  return (
    <ResultContainer>
      {searchData.map((item, index) => (
        <ResultList key={index}>
          {useHighlightText(item.description, value)}
        </ResultList>
      ))}
    </ResultContainer>
  );
}

export default SearchResult;

const ResultContainer = styled.div`
  width: 465px;
  max-height: 70px;
  height: fit-content;
  overflow-y: scroll;
  margin-top: 5px;
  border: 3px solid black;
`;

const ResultList = styled.li`
  list-style: none;
  font-size: 17px;
`;
