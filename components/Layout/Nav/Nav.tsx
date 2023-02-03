/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useState, useCallback, useEffect, useRef, memo } from "react";
import { useRecoilState } from "recoil";
import { darkState } from "@/recoil/darkAtom";
import lists from "@/common/NavList";
import useToggleBtn from "@/hooks/useToggleBtn";
import { AiFillGithub } from "react-icons/ai";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import St from "./Nav.module.sass";

const Nav = () => {
  const navBar = useRef<HTMLElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const [check, setCheck] = useRecoilState<boolean>(darkState);
  const [isOpen, openHandler] = useToggleBtn([navBar, btn]);
  const [menuBar, setMenuBar] = useState("");

  const onChangeHandler = useCallback(() => {
    setCheck(!check);
  }, [check]);

  useEffect(() => {
    if (isOpen) {
      setMenuBar(St.menu_bar_hidden);
    } else if (check) {
      setMenuBar(St.menu_bar_light);
    } else {
      setMenuBar(St.menu_bar);
    }
  }, [isOpen, check]);

  return (
    <>
      <button
        ref={btn}
        className={menuBar}
        onClick={() => openHandler()}
        aria-label="Menu">
        <FaBars size={48} />
      </button>
      <nav ref={navBar} className={isOpen ? St.nav : St.nav_hidden}>
        <ul className={St.lists}>
          {lists.map((list) => {
            return (
              <li key={list.name}>
                <Link href={list.link}>{list.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={St.btn_box}>
          <a href="https://github.com/Gon1782">
            <AiFillGithub size={64} color="white" />
          </a>
          <a href="https://velog.io/@hss3522">
            <ImBlog size={60} color="white" />
          </a>
          <label className={check ? St.switch__checked : St.switch}>
            <input type="checkbox" onChange={() => onChangeHandler()} />
            <div>
              <span className={St.sun}>
                <FaSun color="orange" size={24} />
              </span>
              <span className={St.moon}>
                <FaMoon color="yellow" size={20} />
              </span>
            </div>
          </label>
        </div>
      </nav>
    </>
  );
};

export default memo(Nav);
