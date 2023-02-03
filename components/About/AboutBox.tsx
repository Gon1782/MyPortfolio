import St from "@/pages/about/About.module.sass";

interface Props {
  name: string;
  content: string;
  icon: JSX.Element;
}

const Box = ({ name, content, icon }: Props) => {
  return (
    <div className={St.info_box}>
      <div className={St.info}>
        {icon}
        <div>
          <span className={St.name}>{name}</span>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default Box;
