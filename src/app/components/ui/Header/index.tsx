"use client";

import Image from "next/image";
import menuIcon from "@/../public/menu-icon.svg";
import closeMenuIcon from "@/../public/close-icon.svg";
import { useState } from "react";
import "./style.css";

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
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div>
      <div className="app-header fixed w-screen backdrop-blur flex justify-between items-center border-b border-white p-3 z-10">
        <div className="header-logo">
          <h3 className="text-[1.5rem] text-white">
            hitallo-<span className="text-[#00f500]">dev</span>
          </h3>
        </div>

        <div
          className={`menu-icon ${isMenuActive ? "w-[25px]": "w-[30px]"} mr-4`}
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
        className={`menuDrawer ${
          isMenuActive ? "activeMenuDrawer" : ""
        } fixed backdrop-blur w-screen top-[61px] p-5 z-10`}
      >
        <ul
          className={`menuOptions ${
            isMenuActive ? "activeMenuOptions" : ""
          } flex flex-col gap-2 text-white items-center`}
        >
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
