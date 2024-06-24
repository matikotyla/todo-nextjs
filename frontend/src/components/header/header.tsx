"use client";

import React, { FunctionComponent } from "react";

import { Container } from "@/components/container";
import { Link } from "@/components/header/link";

import { AdafruitLogo } from "@/assets";

import {
  HeaderProps,
  HeaderData,
  HeaderStyles as styles,
} from "@/components/header";
import { usePathname } from "next/navigation";

export const Header: FunctionComponent<HeaderProps> = () => {
  const pathname = usePathname();

  return (
    <header className={styles.root}>
      <Container>
        <nav className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <AdafruitLogo className="h-8 w-auto fill-sky-600" />
            </a>
          </div>
          <div className="flex gap-x-4 lg:gap-x-12">
            {HeaderData.links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                name={link.name}
                active={pathname === link.to}
              />
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};
