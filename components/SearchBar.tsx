import { Search } from "./assets/Search";
import styled from "styled-components";
export const SearchBar = () => (
  <InputBorder>
    <PaddingVertical14>
      <Search />
    </PaddingVertical14>
    <TextInput placeholder="キーワード検索" />
  </InputBorder>
);

const InputBorder = styled.div`
  display: flex;
  justify-content: space-bettween;
  align-items: center;
  border: 1px solid #aaaaaa;
  border-radius: 40px;
`;

const PaddingVertical14 = styled.div`
  padding: 14px 15px 14px 15px;
`;

const TextInput = styled.input`
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
`;
