import React from "react";
import Table from "./components/table";
import { fetchLineData } from "./services/fetch-line-data/fetchLineData";
import { Line } from "./models/line";
import { Wrapper, HeaderContainer } from "./styling/TableStyles";
import { ReactComponent as Train } from "./train.svg";

const App = () => {
  const [lineData, setLineData] = React.useState<Line[]>([]);

  React.useEffect(() => {
    updateLineData();
  }, []);

  async function updateLineData() {
    try {
      const lineData = await fetchLineData();
      if (lineData !== undefined) {
        setLineData(lineData);
      } else {
        setLineData([]);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Wrapper>
      <HeaderContainer>
        <Train width={90} />
      </HeaderContainer>

      <Table lineData={lineData} />
    </Wrapper>
  );
};
export default App;
