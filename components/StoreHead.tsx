import { DownArrow } from "./assets/DownArrow";
import { Store } from "./assets/Store";
import { Center, Text, TitleText } from "./Style";

export const StoreHead = () => (
  <Center>
    <Store />
    <TitleText>店舗を探す</TitleText>
    <Text>SHOP</Text>
    <DownArrow />
  </Center>
);
