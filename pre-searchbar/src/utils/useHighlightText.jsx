import React from "react";
import styled from "styled-components";

export const useHighlightText = (text, highlight) => {
  if (!highlight) return text;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <HighlightText key={index}>{part}</HighlightText>
    ) : (
      part
    )
  );
};

const HighlightText = styled.span`
  font-weight: bold;
  color: black;
`;
