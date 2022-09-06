import Image from "next/image";
import styled from "styled-components";

interface SalePannelType {
  imgUrl: any;
  title: String;
  content: String;
  dateTime: String;
}

export const SalePannel = ({
  imgUrl,
  title,
  content,
  dateTime,
}: SalePannelType) => {
  return (
    <>
      <Container>
        <Image
          src={imgUrl}
          alt="Picture of the author"
          width={75}
          height={75}
        />

        <PannelContainer>
          <TitleContainer>
            <BackgroundBlack>
              <TitleText>{title}</TitleText>
            </BackgroundBlack>
            <DateText>{dateTime}</DateText>
          </TitleContainer>

          <ContentText>{content}</ContentText>
        </PannelContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
`;

const PannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 70%;
`;

const TitleText = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 140%;
  color: #ffffff;
  padding: 0px 5px 0px 5px;
`;

const ContentText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #3d3d3d;
  line-height: 1.5em;
  height: 3em;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const DateText = styled.p`
  font-family: "Hiragino Kaku Gothic Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 140%;
  color: #666666;
  margin-left: 10px;
`;

const BackgroundBlack = styled.div`
  background-color: #3d3d3d;
  border-radius: 30px;
  display: flex;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
