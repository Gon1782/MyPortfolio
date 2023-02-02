import { useEffect, useState } from "react";
import { date } from "@/common/utils";
import St from "./Home.module.sass";

const Home = () => {
  const [today, now] = date();
  const [day, setDay] = useState(today);
  const [time, setTime] = useState(now);

  useEffect(() => {
    setInterval(() => {
      const [today, now] = date();
      setTime(now);
      if (today !== day) setDay(today);
    }, 30000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={St.container}>
      <header className={St.home_header}>
        <div>날씨</div>
        <div>{day}</div>
        <div>{time}</div>
      </header>
      <div className={St.box_container}>
        <div className={St.box1}>안녕하세요!</div>
        <div className={St.box2}>
          프론트엔드 개발자를 꿈꾸는&nbsp;<span>한상권</span>입니다!
        </div>
      </div>
    </div>
  );
};

export default Home;
