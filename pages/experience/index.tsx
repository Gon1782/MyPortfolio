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
      </div>
    </>
  );
};

export default Experience;
