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
import AboutBox from "@/components/About/AboutBox";

const About = () => {
  const check = useRecoilValue<boolean>(darkState);

  const lists = [
    {
      title: "이름",
      content: "한상권",
      icon: <BsFillPersonFill size={64} />,
    },
    {
      title: "생년월일",
      content: "1999.04.27",
      icon: <BsFillCalendarFill size={48} />,
    },
    {
      title: "E-Mail",
      content: "hss3522@gmail.com",
      icon: <AiOutlineMail size={54} />,
    },
    {
      title: "Phone",
      content: "010-3388-3852",
      icon: <BsFillTelephoneFill size={54} />,
    },
  ];

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={St.box}>
        <header className={St.header}>About</header>
        <div className={check ? St.info_container_light : St.info_container}>
          {lists.map((x) => {
            return (
              <AboutBox
                key={x.title}
                name={x.title}
                content={x.content}
                icon={x.icon}
              />
            );
          })}
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
