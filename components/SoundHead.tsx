import { DownArrow } from "./assets/DownArrow";
import { Sound } from "./assets/Sound";
import { Center, Text, TitleText } from "./Style";

export const SoundHead = () => (
  <Center>
    <Sound />
    <TitleText>店舗を探す</TitleText>
    <Text>NEWS / EVENT</Text>
    <DownArrow />
  </Center>
);
