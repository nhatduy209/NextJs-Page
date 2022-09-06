import Image from "next/image";
import styled from "styled-components";
import { Flag } from "./assets/Flag";
import { Info } from "./assets/Info";
import { Question } from "./assets/Question";
import { Schedule } from "./Schedule";
import { SearchBar } from "./SearchBar";

export interface MarginType {
  marginTop?: String;
  marginLeft?: String;
  marginBottom?: String;
  marginRight?: String;
}

export const RightBar = () => {
  return (
    <div>
      <Header>
        <PaddingIcon>
          <MarginRight>
            <Info />
          </MarginRight>{" "}
          施設情報
        </PaddingIcon>

        <VerticalLine />

        <PaddingIcon>
          <MarginRight>
            <Question />
          </MarginRight>
          FAQ・お問い合わせ
        </PaddingIcon>
      </Header>

      <MarginRight40>
        <MarginVertical40>
          <SearchBar />
        </MarginVertical40>

        <Schedule />

        <MarginTop32>
          <Image
            src="/sale.png"
            alt="Picture of the author"
            width={300}
            height={256}
          />
        </MarginTop32>

        <Row>
          <Flag />
          <FlagText>開催中のイベント</FlagText>
        </Row>
        <hr />
        <SaleText>リンクスるSALE2022 SUMMER開催☀️</SaleText>
        <SaleContent>️開催期間：2022.07.20〜08.20</SaleContent>
      </MarginRight40>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-left: 1px solid #3d3d3d;
  border-bottom: 1px solid #3d3d3d;
  border-radius: 0px 0px 0px 12px;
  margin-top: 15px;
`;

const PaddingIcon = styled.div`
  padding: 15px 10px 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarginRight = styled.div`
  margin-right: 8px;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #cdcdcd;
  height: 12px;
`;

const MarginVertical40 = styled.div`
  margin: 40px 0px 40px 0px;
`;

const MarginRight40 = styled.div`
  margin-right: 40px;
`;

const MarginTop32 = styled.div`
  margin-top: 32px;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
`;

const FlagText = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #f00e0e;
`;

const SaleText = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  width: 80%;
`;

const SaleContent = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 140%;
  color: #666666;
`;
