import St from "./Home.module.sass";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={St.container}>
        <div className={St.box_container}>
          <div className={St.box1}>안녕하세요!</div>
          <div className={St.box2}>
            프론트엔드 개발자를 꿈꾸는 한상권입니다!
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
