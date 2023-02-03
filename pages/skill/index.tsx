import Head from "next/head";
import St from "./Skill.module.sass";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiGit } from "react-icons/si";
import SkillBox from "@/components/Skill/SkillBox";

const Skill = () => {
  const lists = [
    {
      title: "HTML",
      level: "Advance",
      icon: <FaHtml5 size={54} />,
    },
    {
      title: "CSS",
      level: "Advance",
      icon: <FaCss3 size={48} />,
    },
    {
      title: "JavaScript",
      level: "Advance",
      icon: <IoLogoJavascript size={48} />,
    },
    {
      title: "TypeScript",
      level: "Basic",
      icon: <SiTypescript size={48} />,
    },
    {
      title: "React",
      level: "Advance",
      icon: <FaReact size={48} />,
    },
    {
      title: "React-Native",
      level: "Basic",
      icon: <FaReact size={48} />,
    },
    {
      title: "Git",
      level: "Advance",
      icon: <SiGit size={48} />,
    },
  ];

  return (
    <>
      <Head>
        <title>Skill</title>
      </Head>
      <div className={St.box}>
        <div className={St.header}>
          <div className={St.name}>Skill</div>
          <div className={St.level}>
            basic &gt; advance &gt; expert &gt; master{" "}
          </div>
        </div>
        <div className={St.box_wrap}>
          {lists.map((x) => {
            return (
              <SkillBox
                key={x.title}
                title={x.title}
                level={x.level}
                icon={x.icon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
