"use client";

import Image from "next/image";
import menuIcon from "@/../public/menu-icon.svg";
import Link from "next/link";
import closeMenuIcon from "@/../public/close-icon.svg";
import { useEffect, useState } from "react";
import "./style.css";
import useWindowWidth from "@/hooks/useWindowWidth";

interface IMenuButton {
  isActive: boolean;
  openIcon: string;
  closeIcon: string;
}

function MenuButton({ isActive, openIcon, closeIcon }: IMenuButton) {
  return !isActive ? (
    <Image className="w-100" src={openIcon} alt="Open menu icon"></Image>
  ) : (
    <Image className="w-100" src={closeIcon} alt="Close menu icon"></Image>
  );
}

export default function Header() {
  const width = useWindowWidth();
  const isLarger = width > 1024;
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (isLarger){
      setIsMenuActive(false);
    } else {
      setIsMenuActive(false);
    }
  }, [isLarger])

  return (
    <div>
      <div className="app-header fixed w-screen backdrop-blur flex justify-between items-center border-b border-white p-3 z-10">
        <div className="header-logo">
          <h3 className="text-[1.3rem] text-white md:text-[1.4rem] font-medium">
            hitallo-<span className="text-[#00f500]">dev</span>
          </h3>
        </div>

        <div
          className={
            `menu-icon ${isMenuActive && !isLarger ? "w-[25px]": "w-[30px]"} mr-4 ${
              isLarger ? "hidden" : ""
            }`}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <MenuButton
            isActive={isMenuActive}
            openIcon={menuIcon}
            closeIcon={closeMenuIcon}
          ></MenuButton>
        </div>
      </div>

      <nav
        className={`menuDrawer fixed ${
          !isLarger && isMenuActive ? 
          "activeMenuDrawer opacity-100 !visible" : 
          "invisible opacity-100 duration-600"
        } 
          ${
          !isLarger ? 
          "fixed backdrop-blur w-screen top-[56px] p-5 z-10 h-[180px] invisible" : 
          "h-[60px] flex !visible opacity-100 z-20 flex-row items-center"
          }
        `}
      >
        <ul
          className={`menuOptions duration-200 w-full fixed left-[-100px] ${
            isMenuActive ? "activeMenuOptions" : ""
          } ${
            !isLarger ? "flex flex-col gap-2 text-white items-center opacity-0" :
            "flex gap-10 justify-end text-base opacity-100 text-white" 
          }`}
        >
          <li><Link onClick={() => setIsMenuActive(false)} href="#home">Home</Link></li>
          <li><Link onClick={() => setIsMenuActive(false)} href="#about">About</Link></li>
          <li><Link onClick={() => setIsMenuActive(false)} href="#skills">Skills</Link></li>
          <li><Link onClick={() => setIsMenuActive(false)} href="#projects">Projects</Link></li>
          <li><Link onClick={() => setIsMenuActive(false)} href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
