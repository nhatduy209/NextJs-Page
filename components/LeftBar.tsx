import Image from "next/image";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import styled from "styled-components";
import { Access } from "./Access";
import { Floor } from "./Floor";
import { Open } from "./Open";
import { SalePannel } from "./SalePannel";
import { SoundHead } from "./SoundHead";
import { StoreHead } from "./StoreHead";

export const LeftBar = () => (
  <>
    <Container>
      <MarginBottom20>
        <Row>
          <Col xs={2} sm={2}>
            <Image
              src="/Logo.png"
              alt="Picture of the author"
              width={180}
              height={80}
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
    </Container>

    <MarginHorizontal>
      <Image
        src="/dashboard.png"
        alt="Picture of the author"
        width={1100}
        height={600}
      />
    </MarginHorizontal>

    <Container>
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
  </>
);

const Container = styled.div`
  margin: 40px 44px 30px 47px;
`;

const MarginHorizontal = styled.div`
  margin: 0px 44px 0px 0px;
`;

const MarginBottom20 = styled.div`
  margin-bottom: 20px;
`;
