import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 100px;
  position: relative;
  bottom: 50px;
`;

interface CircleProps {
  lineId: String;
}

export const Circle = styled.span<CircleProps>`
  height: 20px;
  width: 20px;
  background-color: ${props => choseBackgroundColor(props.lineId)};
  border-radius: 50%;
  display: inline-block;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  margin: 48px auto 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 80%;
  min-width: 800px;
  background: #ffffff;
`;
export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 50px;
  // margin: 0px auto;
  // position: relative;
  align: left;
`;

export const CardHeaderText = styled.h2`
  color: #1ca9f4;
`;

export const HeaderData = styled.th`
  padding-right: 50px;
  padding-left: 50px;
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
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
`;

export function choseBackgroundColor(lineId: String) {
  switch (lineId) {
    case "bakerloo": {
      return "#795548";
    }
    case "circle": {
      return "#ffc400";
    }
    case "hammersmith-city": {
      return "#f8bbd0";
    }
    case "central": {
      return "#f44336";
    }
    case "district": {
      return "#4caf50";
    }
    case "jubilee": {
      return "#90a4ae";
    }
    case "metropolitan": {
      return "#9c27b0";
    }
    case "northern": {
      return "#212121";
    }
    case "piccadilly": {
      return "#2979ff";
    }
    case "victoria": {
      return "#29b6f6";
    }
    case "waterloo-city": {
      return "#80deea";
    }
    default: {
      return "#bbb";
    }
  }
}
