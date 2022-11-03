import Image from "next/image";
import Link from "next/link";
import demographics from "../../public/assets/icons/demographics.svg";
import reports from "../../public/assets/icons/reports.svg";
import tasks from "../../public/assets/icons/tasks.svg";
import notifications from "../../public/assets/icons/notifications.svg";
import user from "../../public/assets/images/user.jpg";
import { Logo } from "../_common/Logo";

export const sideBarLinks = [
  {
    src: demographics,
    label: "Demographics",
    href: "/",
  },
  {
    src: reports,
    label: "Reports",
    href: "/",
  },
  {
    src: tasks,
    label: "Tasks",
    href: "/",
  },
  {
    src: notifications,
    label: "Notifications",
    href: "/",
  },
];

const SideBar = () => (
  <div className="hidden flex-col justify-between items-center md:flex">
    <div className="flex flex-col items-center">
      <Logo />
      <div className="flex flex-col gap-14 mt-6">
        {sideBarLinks.map((link) => (
          <a href={link.href} key={`${link.label}SidebarLink`}>
            <div className="flex flex-col gap-2 cursor-pointer items-center py-4 px-2 rounded-3xl transition-all hover:scale-105 hover:shadow-lg hover:bg-[rgba(0,0,0,0.8)]">
              <Image src={link.src} alt={link.label} />
              <span className="text-xs">{link.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
    <a href={"/"} className="flex justify-center ">
      <Image
        height={50}
        width={50}
        className="cursor-pointer rounded"
        src={user}
        alt="user photo"
      />
    </a>
  </div>
);

export default SideBar;
