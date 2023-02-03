import St from "@/pages/skill/Skill.module.sass";

interface Props {
  title: string;
  level: string;
  icon: JSX.Element;
}

const Box = ({ title, level, icon }: Props) => {
  return (
    <div className={St.skill_container}>
      <div className={St.skill_title}>
        {icon}
        <div>{title}</div>
      </div>
      <div>{level}</div>
    </div>
  );
};

export default Box;
