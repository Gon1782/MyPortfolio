import Head from "next/head";
import St from "./Exp.module.sass";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <div className={St.box}>
        <div className={St.header}>Experience</div>
        <div>ui만들기귀찮다</div>
      </div>
    </>
  );
};

export default Experience;
