import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const iconMap: { [key: string]: JSX.Element } = {
  FaLinkedinIn: <FaLinkedinIn size={20} />,
  FaInstagram: <FaInstagram size={20} />,
  FaXTwitter: <FaXTwitter size={20} />,
  FaGithub: <FaGithub size={20} />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/logo.png"
              alt="Geoway"
              width={0}
              height={0}
              sizes="100vw"
              className="w-28 h-auto"
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                      className="transition-all duration-300 hover:text-green-50 hover:font-bold"
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      target="_blank"
                      href={link.href}
                      className="transition-all duration-300 hover:text-green-50"
                    >
                      {iconMap[link.icon]}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          &copy; {currentYear} Geoway | Todos os direitos reservados. - Criado
          por{" "}
          <Link
            className="transition-all duration-300 hover:text-green-50 hover:font-bold"
            href="https://www.linkedin.com/in/gui-bus/"
            target="_blank"
          >
            Guilherme Bustamante
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold whitespace-nowrap uppercase">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
