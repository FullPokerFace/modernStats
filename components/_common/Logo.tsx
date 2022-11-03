import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "/public/assets/icons/logo.svg";
import logoHorizontal from "/public/assets/icons/logo-horizontal.svg";

interface Props {
  isHorizontal?: boolean;
}

export const Logo: FC<Props> = (props) => {
  const { isHorizontal = false } = props || {};
  return (
    <a href={"/"}>
      <Image
        className="cursor-pointer"
        src={isHorizontal ? logoHorizontal : logo}
        alt="Modern stats logo"
      />
    </a>
  );
};
