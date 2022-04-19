import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  background-color: #dcdcdc;
  min-width: 600px;
  width: 70%;
  padding: 20px;
`;

export const TableWrapper = styled.div`
  overflow-y: auto;
  height: 400px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: calc(100% - 2px);

  td {
    padding: 8px 4px;
    border: 1px solid #3b3b3b;
  }
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;

  th div {
    background-color: #dcdcdc;
    text-align: left;
    border: 1px solid #3b3b3b;
    padding: 8px 4px;
  }
`;

export const TableBody = styled.tbody`
  height: 400px;
  overflow-y: scroll;
`;

export const Select = styled.select<{ ml?: number }>`
  font-size: 18px;
  padding: 4px;
  margin-left: ${({ ml }) => `${ml}px`};
`;

export const Flex = styled.div<{ mb?: number }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const FlexItem = styled.div`
  margin-left: auto;
`;

export const Tr = styled.tr`
  :hover {
    background-color: #d2d2d2;
    cursor: pointer;
  }
`;

export const Header = styled.h3<{ align?: string; mb?: number }>`
  font-size: 24px;
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 4px;
`;

export const FlexCol = styled.div`
  flex: 1 1 calc(100% / 3);
  padding: 0 20px;

  input,
  select,
  div {
    width: 100%;
  }
`;

export const ResultText = styled.div`
  font-size: 22px;
  padding: 4px;
`;
