import { darkState } from "@/recoil/darkAtom";
import Head from "next/head";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import St from "./Project.module.sass";

const Project = () => {
  const check = useRecoilValue<boolean>(darkState);

  const projects = [
    {
      image: "",
      title: "Batman",
      category: "팀 프로젝트",
      content: "간단소개간단소개",
      duration: "2022-12-22 ~ 2022-12-28",
      techs: ["react", "react-query", "redux"],
    },
    {
      image: "",
      title: "피카츙",
      category: "팀 프로젝트",
      content: "간단소개간단소개",
      duration: "2023-01-22 ~ 2023-01-30",
      techs: ["react", "react-query", "redux"],
    },
    {
      image: "",
      title: "나만의 포트폴리오 사이트",
      category: "개인 프로젝트",
      content: "간단소개간단소개",
      duration: "2022-12-22 ~",
      techs: ["next-js", "react-query", "recoil", "sass"],
    },
  ];
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <div className={St.project}>
        {projects.map((x, i) => {
          return (
            <div
              className={i % 2 === 0 ? St.container : St.container_2}
              key={x.title}>
              <div className={i % 2 === 0 ? St.box : St.box_2}>
                <Image
                  src={require("@/assets/projects/default.png")}
                  className={St.project_img}
                  alt="Project Image"
                />
                <div className={St.project_box}>
                  <div className={St.title}>{x.title}</div>
                  <div>
                    <div className={St.duration}>{x.duration}</div>
                    <div className={St.content}>{x.content}</div>
                    <div className={St.techs}>
                      {x.techs.map((x, i) => {
                        if (i < 3)
                          return (
                            <div
                              className={check ? St.tech_light : St.tech}
                              key={i}>
                              {x}
                            </div>
                          );
                      })}
                      {x.techs.length > 3 ? (
                        <div className={St.ellipsis}>...</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
