import { DownArrow } from "./assets/DownArrow";
import { FloorMap } from "./assets/FloorMap";
import { Center, Text, TitleText } from "./Style";

export const Floor = () => (
  <Center>
    <FloorMap />
    <TitleText>店舗を探す</TitleText>
    <Text>FLOOR MAP</Text>
    <DownArrow />
  </Center>
);
