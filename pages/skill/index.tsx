import Head from "next/head";
import St from "./Skill.module.sass";

const Skill = () => {
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
        <div>ui만들기귀찮다</div>
      </div>
    </>
  );
};

export default Skill;
