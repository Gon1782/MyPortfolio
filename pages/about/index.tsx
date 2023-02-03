import { useRecoilValue } from "recoil";
import { darkState } from "@/recoil/darkAtom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillCalendarFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import St from "./About.module.sass";
import Head from "next/head";

const About = () => {
  const check = useRecoilValue<boolean>(darkState);

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={St.box}>
        <header className={St.header}>About</header>
        <div className={check ? St.info_container_light : St.info_container}>
          <div className={St.info_box}>
            <div className={St.info}>
              <BsFillPersonFill size={64} />
              <div>
                <span className={St.name}>이름</span>
                <span>한상권</span>
              </div>
            </div>
          </div>
          <div className={St.info_box}>
            <div className={St.info}>
              <BsFillCalendarFill size={48} />
              <div>
                <span className={St.name}>생년월일</span>
                <span>1999.04.27</span>
              </div>
            </div>
          </div>
          <div className={St.info_box}>
            <div className={St.info}>
              <AiOutlineMail size={54} />
              <div>
                <span className={St.name}>E-Mail</span>
                <span>hss3522@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={St.info_box}>
            <div className={St.info}>
              <BsFillTelephoneFill size={54} />
              <div>
                <span className={St.name}>Phone</span>
                <span>010-3388-3852</span>
              </div>
            </div>
          </div>
          <a href="https://github.com/Gon1782" className={St.info_box}>
            <div className={St.info}>
              <AiFillGithub size={54} />
              <div>
                <span className={St.name}>GitHub</span>
              </div>
            </div>
          </a>
          <a href="https://velog.io/@hss3522" className={St.info_box}>
            <div className={St.info}>
              <ImBlog size={48} />
              <div>
                <span className={St.name}>Blog</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
