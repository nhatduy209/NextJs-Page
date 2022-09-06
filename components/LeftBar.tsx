import Image from "next/image";
import { Grid, Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import styled from "styled-components";
import { Access } from "./Access";
import { Clock } from "./assets/Clock";
import { DownArrow } from "./assets/DownArrow";
import { FloorMap } from "./assets/FloorMap";
import { Marker } from "./assets/Marker";
import { Sound } from "./assets/Sound";
import { Store } from "./assets/Store";
import { Floor } from "./Floor";
import { Open } from "./Open";
import { SalePannel } from "./SalePannel";
import { SoundHead } from "./SoundHead";
import { StoreHead } from "./StoreHead";

export const LeftBar = () => (
  <Container>
    <MarginBottom20>
      <Row>
        <Col xs={2} sm={2}>
          <Image
            src="/Logo.png"
            alt="Picture of the author"
            width={180}
            height={69}
          />
        </Col>
        <Col xs={2} sm={2}>
          <StoreHead />
        </Col>
        <Col xs={2} sm={2}>
          <Floor />
        </Col>
        <Col xs={2} sm={2}>
          <SoundHead />
        </Col>
        <Col xs={2} sm={2}>
          <Open />
        </Col>
        <Col xs={2} sm={2}>
          <Access />
        </Col>
      </Row>
    </MarginBottom20>
    <Image
      src="/dashboard.png"
      alt="Picture of the author"
      width={1100}
      height={660}
    />

    <Row>
      <Col xs={4} sm={4}>
        <SalePannel
          imgUrl={"/Fruit1.png"}
          title={"レストラン・カフェ"}
          content={
            "2F「#ごほうびパーラー」にて7/19～の夏季限定で“#すいかパフェ”が新登場‼️"
          }
          dateTime={"2022.07.20"}
        />
      </Col>
      <Col xs={4} sm={4}>
        <SalePannel
          imgUrl={"/fruit2.png"}
          title={"レストラン・カフェ"}
          content={
            "LINKS UMEDA B1F　「クリスピー・クリーム・ドーナツ」より、7/20（水）～サマーカーニバルのドーナツが発売❗️"
          }
          dateTime={"2022.07.20"}
        />
      </Col>
      <Col xs={4} sm={4}>
        <SalePannel
          imgUrl={"/beauty.png"}
          title={"ショップ"}
          content={
            "LINKSUMEDA3F「#VisionStyle」にて、#ゆうこす プロデュース『Chu's me』から「リリーベージュ」と「ムードグレージュ」の2色が登場💕"
          }
          dateTime={"2022.07.20"}
        />
      </Col>
    </Row>
  </Container>
);

const Container = styled.div`
  margin: 47px 44px 39px 47px;
`;

const TitleText = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #3d3d3d;
  margin: 10px 0px 4px 0px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
  text-align: center;
  color: #aaaaaa;
  margin-bottom: 7px;
`;

const MarginBottom20 = styled.div`
  margin-bottom: 20px;
`;
