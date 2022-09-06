import { Clock } from "./assets/Clock";
import { DownArrow } from "./assets/DownArrow";
import { Center, Text, TitleText } from "./Style";

export const Open = () => (
  <Center>
    <Clock />
    <TitleText>店舗を探す</TitleText>
    <Text>OPEN</Text>
    <DownArrow />
  </Center>
);
