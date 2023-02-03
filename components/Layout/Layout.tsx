import { useRecoilValue } from "recoil";
import { darkState } from "@/recoil/darkAtom";
import Nav from "./Nav/Nav";
import St from "./Layout.module.sass";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const check = useRecoilValue<boolean>(darkState);
  const checkRoute = pathname === "/";

  return (
    <>
      <div className={check ? St.container__light : St.container}>
        <Nav />
        <main>
          <section
            className={checkRoute ? St.main_container_home : St.main_container}>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};

export default Layout;
