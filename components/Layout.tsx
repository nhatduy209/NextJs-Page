import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      {children}
      <Footer>
        【大切なお知らせ】新型コロナウイルス感染症(COVID‑19)対策による営業時間のお知らせ
      </Footer>
    </>
  );
};
