/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import author from "../../public/assets/images/user.jpg";
import { sideBarLinks } from "../SideBar/SideBar";
import { Logo } from "../_common/Logo";

const navLinks = [
  {
    label: "Channel",
    href: "/",
    isActive: true,
  },
  {
    label: "Inbox",
    href: "/",
    isActive: false,
  },
  {
    label: "Graphs",
    href: "/",
    isActive: false,
  },
];

const Nav: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`flex w-full justify-between md:hidden items-center gap-3`}
      >
        <Logo isHorizontal />
        <button onClick={() => setMobileMenuOpen(true)}>{menuSVG}</button>
        <div
          className={`transition-all duration-200 fixed bg-zinc-900 top-0 w-full h-full z-10 flex flex-col justify-between p-8 text-zinc-50 
          ${mobileMenuOpen ? "left-0" : "-left-full"}`}
        >
          <div>
            <p className="flex justify-between items-center">
              <Logo />
              <button onClick={() => setMobileMenuOpen(false)}>
                {closeSVG}
              </button>
            </p>
            <div className="flex flex-col py-4 gap-8 border-b-[1px] border-zinc-500">
              {navLinks &&
                navLinks.length > 0 &&
                navLinks.map((link, index) => (
                  <a key={index} href={link.href}>
                    {link.label}
                  </a>
                ))}
            </div>
            <div className="flex flex-col py-4 gap-8 border-b-[1px] border-zinc-500">
              {sideBarLinks &&
                sideBarLinks.length > 0 &&
                sideBarLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex gap-6 items-start flex-row-reverse"
                  >
                    <img src={link.src.src} alt={link.label} />
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <Image
              className="rounded-full"
              height={40}
              width={40}
              src={author}
              alt="user"
            />
            Account
          </div>
        </div>
      </div>

      {/* Regular Menu */}
      <div className="hidden w-full relative justify-between md:flex">
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <Link key={`${link.label}NavLink`} href={link.href}>
              <a
                className={`transition-all hover:drop-shadow-lg border-b-2 border-b-transparent ${
                  link.isActive
                    ? ""
                    : "hover:opacity-100 opacity-60 hover:border-b-white "
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 ">
          <Image
            className="rounded-full"
            height={40}
            width={40}
            src={author}
            alt="user"
          />
          Account
        </div>
      </div>
    </>
  );
};

const menuSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const closeSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Nav;
