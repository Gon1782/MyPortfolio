import { useRecoilValue } from 'recoil';
import { darkState } from '@/recoil/darkAtom';
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill, BsFillCalendarFill } from "react-icons/bs";
import { ImBlog } from "react-icons/im"
import St from "./About.module.sass";

const About = () => {
  const check = useRecoilValue<boolean>(darkState);

  return (
    <div className={St.box}>
      <div className={St.header}>About</div>
      <div className={check ? St.body_light : St.body}>
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
  );
};

export default About;
