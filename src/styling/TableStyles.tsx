import styled from "styled-components";

export const Wrapper = styled.div`
  background: #1ca9f4;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  overflow: hidden;
  margin: 48px auto 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 80%;
  background: #ffffff;
`;

export const HeaderData = styled.th`
  padding-right: 12%;
  padding-left: 12%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  color: #707070;
  border-bottom: 2px solid #1ca9f4;
`;

export const Table = styled.table`
  border-spacing: 0px;
`;

export const Row = styled.tr`
  font-size: 0.9em;
  text-align: left;
  color: #707070;
`;

export const RowData = styled.td`
  padding-right: 12%;
  padding-left: 12%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
`;
