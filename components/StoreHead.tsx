import { DownArrow } from "./assets/DownArrow";
import { StoreYellowDot } from "./assets/StoreYellowDot";
import { Center, Text, TitleText } from "./Style";

export const StoreHead = () => (
  <Center>
    <StoreYellowDot />
    <TitleText>店舗を探す</TitleText>
    <Text>SHOP</Text>
    <DownArrow />
  </Center>
);
