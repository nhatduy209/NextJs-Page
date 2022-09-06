import styled from "styled-components";
import { Dishes } from "./assets/Dishes";
import { Store } from "./assets/Store";

export const Schedule = () => (
  <Container>
    <TextDateMonth>8/31</TextDateMonth>
    <TextLongDate>Wed.</TextLongDate>

    <Grid>
      <MarginTop28>
        <Store />
      </MarginTop28>
      <MarginTop28>
        <WhiteContainer>
          <Text>1F〜7F</Text>
        </WhiteContainer>
      </MarginTop28>
      <MarginTop28>
        <Center>
          <Text>10:00〜20:00</Text>
        </Center>
      </MarginTop28>

      <Text>ショップ</Text>
      <WhiteContainer>
        <Text>B1〜B2</Text>
      </WhiteContainer>
      <Center>
        <Text>店舗によって異なる</Text>
      </Center>
    </Grid>

    <MarginTopVertical>
      <Line />
    </MarginTopVertical>

    <Grid>
      <MarginTop28>
        <Dishes />
      </MarginTop28>
      <MarginTop28>
        <WhiteContainer>
          <Text>1F〜7F</Text>
        </WhiteContainer>
      </MarginTop28>
      <MarginTop28>
        <Center>
          <Text>10:00〜20:00</Text>
        </Center>
      </MarginTop28>

      <Text>ショップ</Text>
      <WhiteContainer>
        <Text>B1〜B2</Text>
      </WhiteContainer>
      <Center>
        <Text>店舗によって異なる</Text>
      </Center>
    </Grid>
  </Container>
);
const Container = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  padding: 20px;
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
  display: grid;
  grid-template-columns: 25% 25% 50%;
`;

const WhiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 40px;
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarginTop28 = styled.div`
  margin-top: 28px;
  margin-bottom: 8px;
`;

const MarginTopVertical = styled.div`
  margin: 17px 0px 17px 0px;
`;

const Text = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 140%;
`;

const Line = styled.div`
  border: 1px dashed #3d3d3d;
`;

// const Row  = styled.d
