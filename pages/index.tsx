import type { NextPage } from "next";
import { RightBar } from "../components/RightBar";
import { Grid, Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { LeftBar } from "../components/LeftBar";

const Home: NextPage = () => {
  return (
    <Row>
      <Col xs={12} sm={8} lg={9}>
        <LeftBar />
      </Col>
      <Col xs={12} sm={4} lg={3}>
        <RightBar />
      </Col>
    </Row>
  );
};

export default Home;
