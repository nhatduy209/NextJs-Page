import styled from "styled-components";
import { Dishes } from "./assets/Dishes";
import { Store } from "./assets/Store";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const Schedule = () => (
  <Container>
    <TextDateMonth>8/31</TextDateMonth>
    <TextLongDate>Wed.</TextLongDate>

    <MarginTopVertical>
      <Row>
        <Col sx={12} sm={3} lg={3}>
          <ScheduleMenu>
            <Store />
            <StickText>ショップ</StickText>
          </ScheduleMenu>
        </Col>

        <Col sx={6} sm={4} lg={4}>
          {/* // <WhiteContainer>1F〜7F</WhiteContainer> */}
          <WhiteContainer>1F〜7F</WhiteContainer>
          <WhiteContainer>B1〜B2</WhiteContainer>
        </Col>
        <Col sx={6} sm={5} lg={5}>
          <Text>10:00〜20:00</Text>
          <Text>店舗によって異なる</Text>
        </Col>
      </Row>
    </MarginTopVertical>

    <Line />

    <MarginTopVertical>
      <Row>
        <Col sx={12} sm={12} lg={3}>
          <ScheduleMenu>
            <Dishes />
            <StickText>飲食店</StickText>
          </ScheduleMenu>
        </Col>

        <Col sx={12} sm={12} lg={4}>
          <WhiteContainer>1F〜7F</WhiteContainer>
          <WhiteContainer>B1〜B2</WhiteContainer>
        </Col>
        <Col sx={12} sm={12} lg={5}>
          <Text>10:00〜20:00</Text>
          <Text>店舗によって異なる</Text>
        </Col>
      </Row>
    </MarginTopVertical>
  </Container>
);
const Container = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
`;

const TextDateMonth = styled.span`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 140%;
  text-align: center;
  color: #3d3d3d;
`;

const TextLongDate = styled.span`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 140%;
  text-align: center;
  color: #3d3d3d;
`;

const Grid = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const WhiteContainer = styled.p`
  background: #ffffff;
  border-radius: 40px;
  font-size: 11px;
`;

const MarginTopVertical = styled.div`
  margin: 10px 0px 0px 15px;
`;

const Text = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 140%;
  text-align: start;
`;

const StickText = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 140%;
  text-align: start;
  margin: 5px 0px 0px 0px;
`;

const Line = styled.div`
  border: 1px dashed #3d3d3d;
`;

const ScheduleMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
