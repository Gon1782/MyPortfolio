import { useRecoilValue } from 'recoil';
import { darkState } from '@/recoil/darkAtom';
import Nav from "./Nav/Nav";
import St from "./Layout.module.sass";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const check = useRecoilValue<boolean>(darkState);

  return (
    <>
      <div className={check ? St.container__light : St.container}>
        <Nav />
        <main>
          <section className={St.main_container}>{children}</section>
        </main>
      </div>
    </>
  );
};

export default Layout;
